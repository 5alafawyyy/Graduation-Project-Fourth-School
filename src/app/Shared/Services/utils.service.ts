
export class Location {
  constructor(public lat: number, public lng: number) { }

  public static Vector(p1: Location, p2: Location): Location {
    return new Location(p2.lat - p1.lat, p2.lng - p1.lng);
  }

  public static Perpendicular(p: Location): Location {
    return new Location(-p.lng, p.lat);
  }

  public static Identity(p: Location): Location {
    const d = Math.sqrt(Math.pow(p.lat, 2) + Math.pow(p.lng, 2));
    return new Location(p.lat / d, p.lng / d);
  }
}



export class BufferHelper {
  public static ToBufferPolygon(p1: Location, p2: Location, bufferBymeters: number): google.maps.LatLngLiteral[] {
    let result: google.maps.LatLngLiteral[] = [];
    if (p1.lat === p2.lat && p1.lng === p2.lng) return result;
    const buffer = bufferBymeters * 0.00001;
    const id = Location.Perpendicular(Location.Identity(Location.Vector(p1, p2)));

    result.push({ lat: p1.lat + buffer * id.lat, lng: p1.lng + buffer * id.lng });
    result.push({ lat: p2.lat + buffer * id.lat, lng: p2.lng + buffer * id.lng });
    result.push({ lat: p2.lat - buffer * id.lat, lng: p2.lng - buffer * id.lng });
    result.push({ lat: p1.lat - buffer * id.lat, lng: p1.lng - buffer * id.lng });
    result.push({ lat: result[0].lat, lng: result[0].lng });

    return result;
  }
}
