import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].map( region => region.toLocaleLowerCase() );
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) {}

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary me-2 mb-2' : 'btn btn-outline-primary me-2 mb-2';
  }

  activarRegion( region: string ): void {

    if ( this.regionActiva === region ) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPais( region, 'region' ).subscribe(

      paises => this.paises = paises

    );
  }
}
