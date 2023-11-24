import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurio-list',
  templateUrl: './dinosaurio-list.component.html',
  styleUrls: ['./dinosaurio-list.component.css']
})
export class DinosaurioListComponent implements OnInit {

  dinosaurios: Dinosaurio[] = [];
  selected: Boolean = false;
  selectedDinosaurio?: Dinosaurio;
  numCarnivoros: number = 0;
  numHerbivoros: number = 0;

  constructor(private dinosaurioService: DinosaurioService) { }

  ngOnInit() {
    this.getDinosaurios();
  }

  getDinosaurios(): void {
    this.dinosaurioService.getDinosaurios().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
      this.calculateFeedingNumbers(dinosaurios);});
  }

  onSelected(dinosaurio: Dinosaurio): void {
    this.selected = true;
    this.selectedDinosaurio = dinosaurio;
  }

  private calculateFeedingNumbers(dinosaurios: Dinosaurio[]): void {
    this.numCarnivoros = dinosaurios.filter(d => d.feeding === 'Carnivoro').length;
    this.numHerbivoros = dinosaurios.filter(d => d.feeding === 'Herbivoro').length;
  }

}
