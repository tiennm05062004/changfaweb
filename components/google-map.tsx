"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { Locale } from "@/lib/i18n"

interface Location {
  lat: number
  lng: number
  title: string
  address: string
}

interface GoogleMapProps {
  locations: Location[]
  height?: string
  zoom?: number
}

const mapCopy: Record<Locale, { apiKeyMissing: string; mapLoadFailed: string; ourLocation: string; viewOnMap: string; mapTitle: string }> = {
  vi: {
    apiKeyMissing: "Google Maps API key không được cấu hình",
    mapLoadFailed: "Không thể tải Google Maps",
    ourLocation: "Vị Trí Của Chúng Tôi",
    viewOnMap: "Xem trên Google Maps",
    mapTitle: "Bản đồ",
  },
  en: {
    apiKeyMissing: "Google Maps API key is not configured",
    mapLoadFailed: "Unable to load Google Maps",
    ourLocation: "Our Locations",
    viewOnMap: "View on Google Maps",
    mapTitle: "Map",
  },
  zh: {
    apiKeyMissing: "未配置 Google Maps API key",
    mapLoadFailed: "无法加载 Google Maps",
    ourLocation: "我们的位置",
    viewOnMap: "在 Google 地图中查看",
    mapTitle: "地图",
  },
  ja: {
    apiKeyMissing: "Google Maps API キーが未設定です",
    mapLoadFailed: "Google Maps を読み込めません",
    ourLocation: "所在地",
    viewOnMap: "Google Maps で見る",
    mapTitle: "地図",
  },
  ko: {
    apiKeyMissing: "Google Maps API 키가 설정되지 않았습니다",
    mapLoadFailed: "Google Maps를 불러올 수 없습니다",
    ourLocation: "위치 안내",
    viewOnMap: "Google 지도에서 보기",
    mapTitle: "지도",
  },
}

export function GoogleMap({ locations, height = "400px", zoom = 12 }: GoogleMapProps) {
  const { locale } = useLocale()
  const t = mapCopy[locale]
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if Google Maps script is already loaded
    if (window.google?.maps) {
      setMapLoaded(true)
      return
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      setError(t.apiKeyMissing)
      return
    }

    // Load Google Maps script
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    script.async = true
    script.defer = true
    script.onload = () => setMapLoaded(true)
    script.onerror = () => setError(t.mapLoadFailed)
    document.head.appendChild(script)

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [t.apiKeyMissing, t.mapLoadFailed])

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google?.maps) return

    // Calculate center point
    const centerLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length
    const centerLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: centerLat, lng: centerLng },
      zoom: zoom,
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#c9e4f6" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#e0e0e0" }]
        },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }]
        }
      ]
    })

    // Add markers for each location
    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.title,
        animation: window.google.maps.Animation.DROP
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="font-weight: bold; margin-bottom: 4px; color: #1e40af;">${location.title}</h3>
            <p style="color: #666; font-size: 13px; margin: 0;">${location.address}</p>
          </div>
        `
      })

      marker.addListener("click", () => {
        infoWindow.open(map, marker)
      })
    })

    // Fit bounds if multiple locations
    if (locations.length > 1) {
      const bounds = new window.google.maps.LatLngBounds()
      locations.forEach((location) => {
        bounds.extend({ lat: location.lat, lng: location.lng })
      })
      map.fitBounds(bounds)
    }
  }, [mapLoaded, locations, zoom])

  // Fallback UI when no API key or error
  if (error || !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div 
        className="bg-muted rounded-lg flex flex-col items-center justify-center gap-4"
        style={{ height }}
      >
        <MapPin className="h-12 w-12 text-primary" />
        <div className="text-center px-4">
          <h4 className="font-semibold text-foreground mb-2">{t.ourLocation}</h4>
          <div className="space-y-2">
            {locations.map((location, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{location.title}:</span>
                <br />
                {location.address}
              </div>
            ))}
          </div>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${locations[0].lat},${locations[0].lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary hover:underline text-sm"
          >
            {t.viewOnMap}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      className="rounded-lg overflow-hidden"
      style={{ height }}
    />
  )
}

// Simplified embed version (no API key required)
export function GoogleMapEmbed({ 
  locations, 
  height = "400px" 
}: { 
  locations: Location[], 
  height?: string 
}) {
  const { locale } = useLocale()
  const t = mapCopy[locale]
  const [activeLocation, setActiveLocation] = useState(0)
  const location = locations[activeLocation]
  
  const embedUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`

  return (
    <div className="rounded-lg overflow-hidden border border-border">
      {locations.length > 1 && (
        <div className="flex bg-card border-b border-border">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setActiveLocation(index)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeLocation === index 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {loc.title}
            </button>
          ))}
        </div>
      )}
      <div className="p-3 bg-card">
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          {location.address}
        </p>
      </div>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${t.mapTitle} ${location.title}`}
      />
    </div>
  )
}

// Add google maps types
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: unknown) => unknown
        Marker: new (options: unknown) => {
          addListener: (event: string, callback: () => void) => void
        }
        InfoWindow: new (options: unknown) => {
          open: (map: unknown, marker: unknown) => void
        }
        LatLngBounds: new () => {
          extend: (point: { lat: number; lng: number }) => void
        }
        Animation: {
          DROP: unknown
        }
      }
    }
  }
}
