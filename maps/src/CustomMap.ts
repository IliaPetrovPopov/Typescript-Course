export interface MappableItem {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    const mapElement = document.querySelector(mapDivId) as HTMLElement;
    this.googleMap = new google.maps.Map(mapElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappableItem: MappableItem): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappableItem.location.lat,
        lng: mappableItem.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappableItem.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
