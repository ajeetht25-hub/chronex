import {
  APIProvider,
  ControlPosition,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import MapProvider from "./map-provider";
import { PlaceAutocompleteClassic } from "./autocomplete";
import { ShopLocation } from "@/payload-types";

interface Props {
  apiKey: string;
  place: google.maps.places.PlaceResult | null;
  setPlace: (place: google.maps.places.PlaceResult | null) => void;
  mapClassName?: string;
  inputClassName?: string;
  shopPlaces: ShopLocation['locations'];
}
export default function GmapsLocationPicker({
  apiKey,
  place,
  setPlace,
  inputClassName,
  mapClassName,
  shopPlaces
}: Props) {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        className={mapClassName}
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: 0 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
      <PlaceAutocompleteClassic
        inputClassName={inputClassName}
        controlPosition={ControlPosition.TOP_LEFT}
        onPlaceSelect={setPlace}
      />
      {shopPlaces?.map((sp,idx) => (
        <Marker 
          key={idx}
          position={{
            lat: sp.latitude,
            lng: sp.longitude,
          }}
        />
      ))}
      <MapProvider place={place} shopPlaces={shopPlaces} />
    </APIProvider>
  );
}