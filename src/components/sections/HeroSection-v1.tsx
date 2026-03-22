// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { ArrowDown, Sparkles } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// export default function HeroSection() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const scrollToSkillset = () => {
//     const element = document.querySelector('#skillset');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative h-auto md:min-h-screen flex items-center overflow-x-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 -z-10">
//         {/* Gradient Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

//         {/* Decorative Circles */}
//         <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

//         {/* Grid Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.02]"
//           style={{
//             backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
//                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
//             backgroundSize: '60px 60px',
//           }}
//         />

//         {/* Floating Shapes */}
//         <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float" />
//         <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float animation-delay-200" />
//         <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-primary/20 rounded-full animate-float animation-delay-400" />
//       </div>

//       <div className="container-custom w-full pt-24 pb-16 md:pt-32 md:pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Text Content */}
//           <div className="order-2 lg:order-1 space-y-8">
//             {/* Badge */}
//             {/* <div
//               className={cn(
//                 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 opacity-0',
//                 isLoaded && 'animate-fade-in',
//               )}
//             >
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium text-primary">Available for Projects</span>
//             </div> */}

//             {/* Main Title */}
//             <div className="space-y-4">
//               <h1
//                 className={cn(
//                   'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight opacity-0',
//                   isLoaded && 'animate-fade-in animation-delay-100',
//                 )}
//               >
//                 <span className="block text-foreground">Web &</span>
//                 <span className="block text-gradient bg-gradient-to-r from-primary via-accent to-primary">
//                   UI/UX Designer
//                 </span>
//               </h1>
//             </div>

//             {/* Description */}
//             <p
//               className={cn(
//                 'text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl opacity-0',
//                 isLoaded && 'animate-fade-in animation-delay-200',
//               )}
//             >
//               안녕하세요. 웹 및 UI/UX 디자인을 전문으로 하며, 콘텐츠 기획과 사진 촬영을 함께하는
//               디자이너 <span className="text-foreground font-semibold">이서정</span>입니다.
//               <br className="hidden md:block" />
//               <br />
//               사용자 경험을 실제 웹 환경에서 구현하는 과정에 관심을 가지고 프론트엔드 개발 과정을
//               수료하며 디자인과 구현 사이의 이해를 확장했습니다.
//             </p>

//             {/* CTA Buttons */}
//             <div
//               className={cn(
//                 'flex flex-wrap gap-4 opacity-0',
//                 isLoaded && 'animate-fade-in animation-delay-300',
//               )}
//             >
//               <Button
//                 size="lg"
//                 onClick={() => {
//                   const element = document.querySelector('#portfolio');
//                   if (element) {
//                     element.scrollIntoView({ behavior: 'smooth' });
//                   }
//                 }}
//                 className="group"
//               >
//                 <span>View Portfolio</span>
//                 <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => {
//                   const element = document.querySelector('#contact');
//                   if (element) {
//                     element.scrollIntoView({ behavior: 'smooth' });
//                   }
//                 }}
//               >
//                 Get in Touch
//               </Button>
//             </div>

//             {/* Stats */}
//             <div
//               className={cn(
//                 'flex flex-wrap gap-8 pt-8 border-t border-border/50 opacity-0',
//                 isLoaded && 'animate-fade-in animation-delay-400',
//               )}
//             >
//               {[
//                 { value: '11+', label: 'Web Projects' },
//                 { value: '16+', label: 'Years Experience' },
//                 { value: '100+', label: 'Photos Taken' },
//               ].map((stat, index) => (
//                 <div key={index} className="space-y-1">
//                   <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
//                   <p className="text-sm text-muted-foreground">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Profile Image */}
//           <div
//             className={cn(
//               'order-1 lg:order-2 flex justify-center lg:justify-end opacity-0',
//               isLoaded && 'animate-fade-in-right animation-delay-200',
//             )}
//           >
//             <div className="relative">
//               {/* Decorative Ring */}
//               <div
//                 className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin"
//                 style={{ animationDuration: '30s' }}
//               />
//               <div className="absolute -inset-8 rounded-full border border-primary/10" />

//               {/* Image Container */}
//               <div className="relative w-78 h-78 md:w-80 md:h-80 lg:w-82 lg:h-82 rounded-full overflow-hidden border-4 border-background shadow-2xl">
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t  to-transparent z-10 pointer-events-none" />

//                 <Image
//                   src="/images/leeseojeong.jpeg"
//                   alt="이서정"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>

//               {/* Floating Badge */}
//               <div className="hidden md:block">
//                 <div className="absolute -bottom-2 -right-2 md:bottom-4 md:-right-16 bg-background rounded-xl shadow-lg p-3 md:p-3 border border-border animate-float">
//                   <div className="flex items-center gap-2 md:gap-3">
//                     <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
//                       <span className="text-xl md:text-2xl">🎨</span>
//                     </div>
//                     <p className="text-sm font-semibold text-foreground">UI/UX Design</p>
//                   </div>
//                 </div>

//                 {/* Second Floating Badge */}
//                 <div className="absolute -top-2 -left-0 md:top-8 md:-left-20 bg-background rounded-xl shadow-lg p-3 border border-border animate-float animation-delay-300">
//                   <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
//                       <span className="text-xl md:text-2xl">📸</span>
//                     </div>
//                     <p className="text-sm font-medium text-foreground">Photography</p>
//                   </div>
//                 </div>

//                 {/* Third Floating Badge */}
//                 <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-36 bg-background rounded-xl shadow-lg p-3 border border-border animate-float animation-delay-600">
//                   <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
//                       <span className="text-xl md:text-2xl">🖥️</span>
//                     </div>
//                     <p className="text-sm font-medium text-foreground">Frontend Development</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="hidden md:block">
//         <div
//           className={cn(
//             'absolute bottom-10 z-20 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0',
//             isLoaded && 'animate-fade-in animation-delay-500',
//           )}
//         >
//           <button
//             onClick={scrollToSkillset}
//             className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
//           >
//             <span className="text-xs uppercase tracking-widest">Scroll</span>
//             <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
//               <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
//             </div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
