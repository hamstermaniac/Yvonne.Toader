import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMapsModule,CommonModule
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})


export class MapComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef | undefined;
  @ViewChild('googleMap', { static: false }) googleMap: any; // Reference to the <google-map> component
  map!: google.maps.Map | null;
  drawingManager: google.maps.drawing.DrawingManager | any;
  drawnPolygons: google.maps.Polygon[] = [];
  mapCenter: google.maps.LatLngLiteral = { lat: 44.4302557, lng: 26.1095482 };
  mapZoom = 15.75;
  mapOptions: google.maps.MapOptions = {
    zoomControl: false,
    maxZoom: 16,
    minZoom: 15,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    draggable: false,
    // Add other options as needed
  };
  showConfirmDelete: boolean = false;
  polygonToDelete: google.maps.Polygon = new google.maps.Polygon;


  constructor(
  ) { }

  onMapClick(event: google.maps.MapMouseEvent) {
    console.log('Map clicked', event.latLng);
  }

  ngOnInit(): void {
    this.initMap();
  }
  initMap(): void {
    const mapProperties = {
      center: new google.maps.LatLng(44.4302557, 26.1095482), // Example coordinates for New York City
      zoom: 15.75,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      maxZoom: 16,
      minZoom: 15,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      draggable: false
    };
    if (this.mapContainer != undefined) {
      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapProperties);
    }

    const drawingModePolygon: any = 'polygon';

    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: drawingModePolygon,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [drawingModePolygon]
      },
      polygonOptions: {
        editable: true,
        draggable: true
      }
    });

    this.drawingManager.setMap(this.googleMap.googleMap);
  }

  startDrawing(): void {
    if (this.drawingManager != undefined) {
      console.log('intra in functie');
      this.drawingManager.setMap(this.googleMap.googleMap);
      this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    }
    console.log(this.googleMap);
    // Listen for the completion event of the polygon drawing process
    google.maps.event.addListener(this.drawingManager, 'polygoncomplete', (polygon: google.maps.Polygon) => {
      this.drawnPolygons = [];
      this.drawnPolygons.push(polygon); // Add the newly drawn polygon to the list
      console.log('Asta e polygon complete: ', this.drawnPolygons);
      this.drawingManager.setDrawingMode(null);
      this.polygonToDelete = polygon;
    });
  }
  deletePolygon(polygon: google.maps.Polygon): void {
    this.showConfirmDelete = false;
    // Remove the polygon from the map
    polygon.setMap(null);

    // Remove the polygon from the list
    const index = this.drawnPolygons.indexOf(polygon);
    if (index !== -1) {
      this.drawnPolygons.splice(index, 1);
    }
  }
}
