import { useEffect, useMemo, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import type { MarkerPoint } from '@/data/trips'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// 修复 Vite / React 项目中 Leaflet 默认图标丢失的问题
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

export interface TripMapProps {
  markers: MarkerPoint[]
  zoom?: number
}

export function TripMap({ markers, zoom = 6 }: TripMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<L.Map | null>(null)

  const center = useMemo(() => {
    if (!markers.length) {
      return [35, 105] as [number, number]
    }
    return [markers[0].lat, markers[0].lng] as [number, number]
  }, [markers])

  // 初始化地图
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current, {
      center,
      zoom,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 贡献者',
    }).addTo(map)

    mapRef.current = map
  }, [center, zoom])

  // 根据当前目的地更新视图和标记
  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    map.setView(center, zoom)

    const layer = L.layerGroup().addTo(map)

    markers.forEach((marker) => {
      const popupHtml = `<div style="font-size: 12px; line-height: 1.5;">
        <div style="font-weight: 600; margin-bottom: 2px;">${marker.name}</div>
        <div style="color: #4b5563;">${marker.description}</div>
      </div>`

      L.marker([marker.lat, marker.lng]).addTo(layer).bindPopup(popupHtml)
    })

    return () => {
      map.removeLayer(layer)
    }
  }, [markers, center, zoom])

  // 组件卸载时销毁地图
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='h-full w-full rounded-2xl shadow-inner'
      style={{ minHeight: 260 }}
    />
  )
}
