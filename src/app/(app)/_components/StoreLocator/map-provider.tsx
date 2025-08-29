"use client";

import { useMap } from "@vis.gl/react-google-maps";
import React, { useEffect } from "react";
import { ShopLocation } from "@/payload-types";

interface Props {
  place: google.maps.places.PlaceResult | null;
  shopPlaces: ShopLocation['locations'];
}

const calculateDistance = (
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number => {
  const R = 6371; 
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; 
  return distance;
};

const findNearestStore = (
  userLat: number, 
  userLng: number, 
  stores: ShopLocation['locations']
): {latitude: number, longitude: number, index: number, shopName: string} | null => {
  if (!stores || !stores.length) return null;
  
  let minDistance = Number.MAX_VALUE;
  let nearestStoreIndex = -1;
  
  stores.forEach((store, index) => {
    const distance = calculateDistance(userLat, userLng, store.latitude, store.longitude);
    if (distance < minDistance) {
      minDistance = distance;
      nearestStoreIndex = index;
    }
  });
  
  if (nearestStoreIndex === -1) return null;
  
  const nearestStore = stores[nearestStoreIndex];
  return {
    latitude: nearestStore.latitude,
    longitude: nearestStore.longitude,
    shopName: nearestStore.shopName,
    index: nearestStoreIndex
  };
};

const MapHandler = ({ place, shopPlaces }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !place.geometry?.location) return;
    
    const userLat = place.geometry.location.lat();
    const userLng = place.geometry.location.lng();
    
    const nearest = findNearestStore(userLat, userLng, shopPlaces);
    
    if (nearest) {
      map.panTo({ lat: nearest.latitude, lng: nearest.longitude });
      map.setZoom(15); 
    } else if (place.geometry?.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.panTo({ lat: userLat, lng: userLng });
      map.setZoom(15);
    }
  }, [map, place, shopPlaces]);

  return null;
};

export default React.memo(MapHandler);