import { useState } from 'react'
import './App.css'

import { GLOBAL_WINDOW, trips, type TripId } from '@/data/trips'
import { TripMap } from '@/components/TripMap'
import { PriceComparisonChart } from '@/components/PriceComparisonChart'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import {
  CalendarClock,
  Clock3,
  MapPin,
  PlaneTakeoff,
  Sparkles,
  SunMedium,
} from 'lucide-react'

function App() {
  const [activeId, setActiveId] = useState<TripId>('yunnan')

  const activeTrip = trips.find((trip) => trip.id === activeId) ?? trips[0]

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 text-zinc-900'>
      <div className='mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:gap-8 md:px-6 md:py-10'>
        {/* 顶部标题 + 通用时间窗 */}
        <header className='space-y-4 md:space-y-5'>
          <div className='inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm ring-1 ring-white/60 backdrop-blur'>
            <Sparkles className='h-3.5 w-3.5 text-amber-500' />
            <span>2025-2026 跨年 · 杭州出发新年旅行选项</span>
          </div>

          <div className='flex flex-col justify-between gap-3 md:flex-row md:items-end'>
            <div className='space-y-2'>
              <h1 className='text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl'>
                新年旅行选项总览
              </h1>
              <p className='max-w-2xl text-sm text-zinc-600 md:text-base'>
                以目的地为主的六个方案，一眼看清「怎么玩」「怎么回」「能玩什么」，方便你在有限请假天数内选出最合适的一条跨年路线。
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-2 text-xs text-zinc-700 md:text-sm'>
              <div className='inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-white/60 backdrop-blur'>
                <CalendarClock className='h-4 w-4 text-rose-500' />
                <span>{GLOBAL_WINDOW.text}</span>
              </div>
              <div className='inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-amber-800 ring-1 ring-amber-200'>
                <Clock3 className='h-4 w-4 text-amber-500' />
                <span>
                  大部分行程 {GLOBAL_WINDOW.defaultDuration}，深圳 + 广州为 {GLOBAL_WINDOW.pearlDuration}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* 当前目的地的总览卡片 */}
        <section className='relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-xl shadow-rose-100/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-200/80'>
          <div className='relative flex flex-col gap-5 overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-rose-500/95 via-amber-500/95 to-sky-500/95 p-6 text-white md:p-8'>
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45)_0,_transparent_55%)]' />
            <div className='pointer-events-none absolute -right-24 top-10 hidden h-56 w-56 rounded-full bg-white/10 blur-3xl md:block' />

            <div className='relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
              <div className='space-y-4 md:max-w-xl'>
                <p className='text-xs font-medium uppercase tracking-[0.18em] text-rose-100 md:text-[0.7rem]'>
                  当前预览目的地
                </p>
                <div className='space-y-2'>
                  <h2 className='text-2xl font-semibold md:text-3xl'>
                    {activeTrip.title}
                  </h2>
                  <p className='text-sm text-rose-50/90 md:text-base'>{activeTrip.subtitle}</p>
                </div>

                <div className='mt-3 grid gap-2 text-xs md:grid-cols-2 md:text-sm'>
                  <div className='inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/25'>
                    <PlaneTakeoff className='h-4 w-4 text-amber-200' />
                    <div className='space-y-0.5'>
                      <p className='font-medium leading-tight'>
                        出发 / 返程 · {activeTrip.duration}
                      </p>
                      <p className='text-[11px] text-rose-50/90 md:text-xs'>{activeTrip.itinerary}</p>
                    </div>
                  </div>
                  <div className='inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/25'>
                    <SunMedium className='h-4 w-4 text-yellow-200' />
                    <div className='space-y-0.5'>
                      <p className='font-medium leading-tight'>机票约价（去返都为非红眼）</p>
                      <p className='text-[11px] text-rose-50/90 md:text-xs'>
                        {activeTrip.flight.main.label}
                        {activeTrip.flight.alt && `；${activeTrip.flight.alt.label}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative mt-3 flex w-full items-center justify-end md:mt-0 md:w-64'>
                <div className='relative h-32 w-full overflow-hidden rounded-2xl border border-white/30 bg-white/10 shadow-lg shadow-rose-900/30 md:h-40 md:w-64'>
                  <div className='absolute inset-0 bg-gradient-to-tr from-black/45 via-black/15 to-transparent' />
                  <img
                    src={activeTrip.heroImage}
                    alt={activeTrip.title}
                    className='h-full w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-105'
                  />
                  <div className='absolute inset-0 flex flex-col justify-between p-3 text-[10px] md:p-4 md:text-xs'>
                    <div className='inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-1 backdrop-blur'>
                      <MapPin className='h-3 w-3 text-emerald-200' />
                      <span className='font-medium'>
                        {activeTrip.title.replace('（', ' · ').replace('）', '')}
                      </span>
                    </div>
                    <div className='flex items-center text-[10px] text-rose-50/90 md:text-[11px]'>
                      <span className='font-medium'>玩法概览</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs + 每个目的地的详细信息 */}
        <section className='space-y-4 md:space-y-5'>
          <Tabs
            value={activeId}
            onValueChange={(value) => setActiveId(value as TripId)}
            className='w-full'
          >
            <TabsList className='flex w-full flex-wrap gap-2 bg-white/70 p-1.5 text-xs text-zinc-700 shadow-sm ring-1 ring-white/80 backdrop-blur md:gap-3 md:text-sm h-auto'>
              {trips.map((trip) => (
                <TabsTrigger
                  key={trip.id}
                  value={trip.id}
                  className='flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium data-[state=active]:bg-rose-50 data-[state=active]:text-rose-700 data-[state=active]:shadow-sm md:px-4 md:py-2 md:text-sm'
                >
                  <span className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-[11px] font-semibold text-rose-700 md:text-xs'>
                    {trip.id === 'yunnan'
                      ? '云'
                      : trip.id === 'chengdu'
                        ? '蓉'
                        : trip.id === 'northeast'
                          ? '雪'
                          : trip.id === 'chongqing'
                            ? '渝'
                            : trip.id === 'pearl'
                              ? '珠'
                              : '京'}
                  </span>
                  <span>{trip.tabLabel}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {trips.map((trip) => (
              <TabsContent key={trip.id} value={trip.id} className='mt-4 md:mt-5'>
                <div className='grid gap-4 md:gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]'>
                  {/* 左侧：怎么玩 + 怎么回 + 能玩什么 */}
                  <div className='flex flex-col gap-4 md:gap-5'>
                    {/* 怎么玩 · 行程节奏 */}
                    <Card className='border-none bg-white/80 shadow-md shadow-rose-100/60 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl'>
                      <CardHeader className='flex flex-col gap-2 pb-3 md:flex-row md:items-center md:justify-between'>
                        <div className='flex items-center gap-2'>
                          <Badge className='bg-rose-500/90 text-[11px] font-semibold text-rose-50 shadow-sm md:text-xs'>
                            怎么玩 · 行程节奏
                          </Badge>
                        </div>
                        <div className='flex flex-wrap items-center gap-2 text-xs text-zinc-500 md:text-[13px]'>
                          <span className='inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-rose-700 ring-1 ring-rose-100'>
                            <Clock3 className='h-3.5 w-3.5' />
                            <span>{trip.duration}</span>
                          </span>
                          <span className='inline-flex items-center gap-1 rounded-full bg-zinc-50 px-2 py-1 ring-1 ring-zinc-100'>
                            <SunMedium className='h-3.5 w-3.5 text-amber-500' />
                            <span>适合节奏：轻松度假 · 自由搭配</span>
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className='space-y-3 pt-0 text-sm text-zinc-700 md:text-[15px]'>
                        <p>{trip.itinerary}</p>
                        <Separator className='my-2 bg-rose-50' />
                        <div className='space-y-1.5'>
                          {trip.highlights.map((section) => (
                            <div key={section.title} className='space-y-1'>
                              <p className='text-xs font-semibold tracking-wide text-zinc-500'>
                                {section.title}
                              </p>
                              <ul className='flex flex-wrap gap-1.5 text-sm text-zinc-700 md:text-[15px]'>
                                {section.items.map((item) => (
                                  <li
                                    key={item}
                                    className='inline-flex items-center gap-1 rounded-full bg-rose-50/70 px-3 py-1 text-[12px] text-rose-800 ring-1 ring-rose-100 md:text-xs'
                                  >
                                    <span className='h-1.5 w-1.5 rounded-full bg-rose-400' />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* 怎么回 · 机票与价格对比 */}
                    <Card className='border-none bg-white/80 shadow-md shadow-amber-100/60 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl'>
                      <CardHeader className='flex flex-col gap-2 pb-3 md:flex-row md:items-center md:justify-between'>
                        <div className='flex items-center gap-2'>
                          <Badge className='bg-amber-500/90 text-[11px] font-semibold text-amber-50 shadow-sm md:text-xs'>
                            怎么回 · 机票与时间
                          </Badge>
                        </div>
                        <p className='text-xs text-zinc-500 md:text-[13px]'>
                          以非红眼航班为前提，下面价格为当前大致预算，用于不同返程日对比。
                        </p>
                      </CardHeader>
                      <CardContent className='grid gap-4 pt-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center'>
                        <div className='space-y-2 text-sm text-zinc-700 md:text-[15px]'>
                          <p>{trip.flight.main.label}</p>
                          {trip.flight.alt && <p>{trip.flight.alt.label}</p>}
                          <p className='mt-1 text-xs text-zinc-500 md:text-[13px]'>
                            实际价格会随时间波动，但可以大致看出提早一天返程是否更省机票预算。
                          </p>
                        </div>
                        {trip.flight.main.price && trip.flight.alt?.price ? (
                          <div className='rounded-2xl bg-amber-50/80 p-2.5 ring-1 ring-amber-100'>
                            <CardDescription className='mb-1.5 flex items-center justify-between text-[11px] text-amber-800 md:text-xs'>
                              <span>机票价格小对比（元/人）</span>
                            </CardDescription>
                            <PriceComparisonChart
                              mainPrice={trip.flight.main.price}
                              altPrice={trip.flight.alt.price}
                            />
                          </div>
                        ) : (
                          <div className='rounded-2xl bg-zinc-50/80 p-3 text-xs text-zinc-500 ring-1 ring-zinc-100 md:text-[13px]'>
                            暂无明确的 1 月 2 日返程机票价格对比信息，可默认按 {trip.flight.main.label} 估算往返预算。
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* 能玩什么 · 城市与景点列表 */}
                    <Card className='border-none bg-white/85 shadow-md shadow-sky-100/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl'>
                      <CardHeader className='flex flex-col gap-2 pb-3 md:flex-row md:items-center md:justify-between'>
                        <div className='flex items-center gap-2'>
                          <Badge className='bg-sky-500/90 text-[11px] font-semibold text-sky-50 shadow-sm md:text-xs'>
                            能玩什么 · 城市 / 景点一览
                          </Badge>
                        </div>
                        <p className='text-xs text-zinc-500 md:text-[13px]'>
                          先把关键城市和地标记在脑中，再结合右侧地图，看清每个点大致所在位置和串联顺序。
                        </p>
                      </CardHeader>
                      <CardContent className='space-y-4 pt-0 text-sm text-zinc-700 md:text-[15px]'>
                        <div className='grid gap-3 md:grid-cols-2'>
                          {trip.playGroups.map((group) => (
                            <div
                              key={group.label}
                              className='flex flex-col gap-2 rounded-2xl bg-zinc-50/90 p-3 ring-1 ring-zinc-100'
                            >
                              <div className='flex items-center justify-between gap-2'>
                                <div className='inline-flex items-center gap-1.5'>
                                  <MapPin className='h-3.5 w-3.5 text-emerald-500' />
                                  <p className='text-xs font-semibold text-zinc-700 md:text-[13px]'>
                                    {group.label}
                                  </p>
                                </div>
                              </div>
                              <div className='flex flex-wrap gap-1.5'>
                                {group.spots.map((spot) => (
                                  <span
                                    key={spot}
                                    className='inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] text-zinc-700 ring-1 ring-zinc-100 md:text-xs'
                                  >
                                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                                    {spot}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 右侧：互动地图 */}
                  <div className='flex flex-col gap-4 md:gap-5'>
                    <Card className='flex h-full flex-col border-none bg-white/85 shadow-md shadow-sky-100/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl'>
                      <CardHeader className='pb-3'>
                        <div className='flex items-center justify-between gap-2'>
                          <div className='flex items-center gap-2'>
                            <Badge className='bg-emerald-500/90 text-[11px] font-semibold text-emerald-50 shadow-sm md:text-xs'>
                              地图 · 串联主要城市与景点
                            </Badge>
                          </div>
                          <p className='text-[11px] text-zinc-500 md:text-xs'>
                            支持拖动 / 缩放，点击标记查看简要说明
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className='flex-1 pt-0'>
                        <div className='h-72 overflow-hidden rounded-2xl md:h-80'>
                          <TripMap markers={trip.markers} />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <footer className='mt-2 pb-4 text-center text-[11px] text-zinc-400 md:mt-4 md:pb-6 md:text-xs'>
          所有信息均基于当前假期窗口的粗略机票与行程设想，具体预订请以实际查询结果为准。
        </footer>
      </div>
    </div>
  )
}

export default App