import { Component, OnInit } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
interface Universite {
  idChambre: number;
  numeroChambre: number;
  typeC: string;
}

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  chambres: Universite[] = [];
  newChambre: Universite = { idChambre: 0, numeroChambre: 0, typeC: '' };

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.universiteService.getUniversites().subscribe(
      (data) => {
        this.chambres = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des universités:', error);
      }
    );
  }

  onSubmit(): void {
    this.universiteService.addChambre(this.newChambre).subscribe(
      (addedChambre) => {
        this.chambres.push(addedChambre);
        this.newChambre = { idChambre: 0, numeroChambre: 0, typeC: '' };
      },
      (error) => {
        console.error('Erreur lors de l’ajout de la chambre:', error);
      }
    );
  }

  deleteChambre(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette chambre ?')) {
      this.universiteService.deleteChambre(id).subscribe(
        () => {
          this.chambres = this.chambres.filter(chambre => chambre.idChambre !== id);
          console.log('Chambre supprimée avec succès');
        },
        (error) => {
          console.error('Erreur lors de la suppression de la chambre:', error);
        }
      );
    }
  }
}
