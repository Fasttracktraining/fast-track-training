import Link from "next/link";
import BuyButton from "@/components/course/BuyButton";
import { CheckCircle2, PlayCircle, Star, ArrowRight, BookOpen, GraduationCap, Laptop, Infinity as InfinityIcon, Users } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

// Component for the Course Grid Item
const CourseGridItem = ({ title, desc, color, href }: { title: string, desc: string, color: 'red' | 'blue', href: string }) => (
  <Link href={href} className={`flex flex-col items-center justify-center p-10 text-center h-full transition-transform hover:scale-105 ${color === 'red' ? 'bg-ft-red' : 'bg-ft-blue'} text-white rounded-xl shadow-lg`}>
    <div className="w-16 h-16 border-2 border-white/30 rounded-lg flex items-center justify-center mb-6">
      <BookOpen className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold uppercase mb-4 leading-tight">{title}</h3>
    <p className="text-white/90 mb-6 text-sm font-medium">{desc}</p>
    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm border-b border-transparent hover:border-white transition-all pb-1">
      Learn More <ArrowRight className="w-4 h-4" />
    </div>
  </Link>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow">
    <Icon className="w-12 h-12 text-ft-red mb-4" />
    <h3 className="text-xl font-bold text-ft-blue mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
)

export default async function LandingPage() {
  const COURSE_IDS = {
    GROUP: "cmjlqhnug0000kyzeh0jrsnwg",
    ONE_TO_ONE: "cmjlqhnug0000kyzeh0jrsnwg",
    VIP: "cmjlqhnug0000kyzeh0jrsnwg",
  };

  return (
    <main className="min-h-screen font-sans bg-slate-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left z-10 space-y-8">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-ft-blue leading-[1.05] tracking-tight">
                Life in the UK <br />
                <span className="text-ft-red">Test Training</span>
              </h1>

              <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0">
                Secure Your Future With Our Online Tutors. We help you pass first time.
              </p>

              <div className="flex flex-col gap-3 max-w-md mx-auto lg:mx-0 items-center lg:items-start pl-2">
                {[
                  "Unlimited Training Until You Pass",
                  "British Citizenship Specialists",
                  "Professional UK Tutors"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-lg text-slate-800 font-bold">
                    <div className="bg-green-100 rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <a href="#pricing" className="px-8 py-4 bg-white border-2 border-ft-blue text-ft-blue font-bold text-lg uppercase tracking-wider hover:bg-ft-blue hover:text-white transition-all rounded-lg shadow-sm">
                  Get Information
                </a>
                <a href="#pricing" className="px-8 py-4 bg-ft-blue text-white font-bold text-lg uppercase tracking-wider hover:bg-blue-900 transition-all rounded-lg shadow-xl flex items-center justify-center gap-3">
                  <PlayCircle className="w-6 h-6" /> Start Now
                </a>
              </div>
            </div>

            {/* Right Side Image/Graphic */}
            <div className="flex-1 relative flex justify-center items-center">
              {/* Circle Image Wrapper */}
              <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]">

                {/* Diverse Students Image */}
                <div className="absolute inset-0 rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-slate-200">
                  <Image
                    src="/images/students-diverse-traditional.png"
                    alt="Diverse international students studying in the UK"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Secondary Image */}
                <div className="absolute -top-10 -left-10 w-32 h-32 md:w-48 md:h-48 rounded-2xl border-8 border-white shadow-xl overflow-hidden hidden md:block transform -rotate-12 z-10">
                  <Image
                    src="/images/student-south-asian-traditional.png"
                    alt="International student in traditional attire"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Success Badge */}
                <div className="absolute -bottom-6 -left-6 md:bottom-8 md:right-0 md:left-auto bg-ft-red text-white w-32 h-32 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform z-20">
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-center mt-2">Success Rate</span>
                  <span className="text-4xl md:text-6xl font-extrabold">99%</span>
                </div>

                {/* 10 Years Badge */}
                <div className="absolute top-10 -right-4 bg-[#D4AF37] text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-white z-20">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">Celebrating</span>
                  <span className="text-2xl md:text-4xl font-extrabold leading-none">10</span>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-center">Years</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= HERO PRICING (Dark) ================= */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-ft-blue mb-4">Choose Your Course</h2>
            <div className="w-24 h-2 bg-ft-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

            {/* 1. Unlimited Group */}
            <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-xl flex flex-col border border-slate-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Unlimited Group Training</h3>
              <p className="text-slate-400 text-sm mb-8">Most Popular Choice</p>
              <div className="text-5xl font-extrabold mb-2">£125</div>
              <div className="text-slate-500 text-sm mb-10">One-time payment</div>

              <ul className="space-y-4 mb-10 flex-1">
                {["Unlimited Live Classes", "Until You Pass Guarantee", "Study Materials Included", "Morning & Evening Classes"].map((pd, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> {pd}
                  </li>
                ))}
              </ul>
              <BuyButton courseId={COURSE_IDS.GROUP} price={125} slug="group-training" />
            </div>

            {/* 2. Fast Track VIP (Center Highlight) */}
            <div className="bg-white p-10 rounded-2xl shadow-2xl border-4 border-ft-blue relative z-10 transform lg:-translate-y-4 flex flex-col">
              <div className="absolute top-0 right-0 left-0 bg-ft-blue text-white text-xs font-bold uppercase tracking-widest py-2 text-center rounded-t-lg">Recommended</div>
              <h3 className="text-2xl font-bold text-ft-blue mb-2 mt-4 text-center">Fast Track VIP</h3>
              <p className="text-slate-500 text-sm mb-8 text-center">Pass in 7 Days</p>
              <div className="text-ft-blue text-6xl font-extrabold mb-2 text-center">£159</div>
              <div className="text-slate-400 text-sm mb-10 text-center">One-time payment</div>

              <ul className="space-y-4 mb-10 flex-1">
                {["Everything in Group +", "Priority 1-to-1 Support", "Fast Track Exam Booking", "Personal Action Plan"].map((pd, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                    <CheckCircle2 className="w-6 h-6 text-ft-blue flex-shrink-0" /> {pd}
                  </li>
                ))}
              </ul>
              <BuyButton courseId={COURSE_IDS.VIP} price={159} slug="vip-training" />
            </div>

            {/* 3. 1-to-1 Training */}
            <div className="bg-slate-900 text-white p-10 rounded-2xl shadow-xl flex flex-col border border-slate-800">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">1-to-1 Training</h3>
              <p className="text-slate-400 text-sm mb-8">Personal Tutor</p>
              <div className="text-5xl font-extrabold mb-2">£250</div>
              <div className="text-slate-500 text-sm mb-10">Block of 5 Sessions</div>

              <ul className="space-y-4 mb-10 flex-1">
                {["Private Zoom Lessons", "Flexible Scheduling", "Tailored to Your Weaknesses", "Mock Interviews"].map((pd, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> {pd}
                  </li>
                ))}
              </ul>
              <BuyButton courseId={COURSE_IDS.ONE_TO_ONE} price={250} slug="1-to-1-training" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section className="py-24 bg-slate-50" id="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-ft-blue">Our Courses</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We offer a range of courses to help you settle in the UK.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CourseGridItem
              title="A1 English Training"
              desc="Suitable for initial entry into the UK and for Spouse Visa."
              color="red"
              href="/courses/a1-english"
            />
            <CourseGridItem
              title="B1 English Training"
              desc="Suitable for Indefinite Leave To Remain and British Citizenship."
              color="blue"
              href="/courses/b1-english"
            />
            <CourseGridItem
              title="A2 English Training"
              desc="Suitable for Spouse Visa Extension after 2.5 years."
              color="red"
              href="/courses/a2-english"
            />
            <CourseGridItem
              title="Life in the UK"
              desc="Suitable for Indefinite Leave To Remain and British Citizenship."
              color="blue"
              href="/courses/life-in-the-uk"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-ft-blue mb-4">Why Choose Fast Track?</h2>
            <div className="w-20 h-1.5 bg-ft-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={InfinityIcon}
              title="Unlimited Lessons"
              desc="Attend as many lessons as you need. We will support you until you pass your exam."
            />
            <FeatureCard
              icon={Laptop}
              title="Online Lessons"
              desc="Learn from the comfort of your own home or on any device wherever you may be."
            />
            <FeatureCard
              icon={GraduationCap}
              title="British Teachers"
              desc="Qualified, friendly and professional British teachers to support you to pass your exam."
            />
            <FeatureCard
              icon={BookOpen}
              title="Study Materials"
              desc="When you join, you will receive a welcome pack containing your practice materials."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="99% Pass Rate"
              desc="When you study with us you have a much better chance of passing your test."
            />
            <FeatureCard
              icon={Users}
              title="Group or 1:1"
              desc="Our training can be completed in online group classes, face-to-face or 1:1 with a teacher."
            />
          </div>
        </div>
      </section>

      {/* ================= OUR STUDENTS SECTION ================= */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-ft-blue leading-tight uppercase tracking-tight">
                Empowering a <span className="text-ft-red">Diverse Community</span> <br /> of Learners
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium italic">
                "We take pride in helping students from all backgrounds achieve their goals in the UK. Whether you're here for family, work, or building a new life, our traditional and modern teaching methods are tailored for you."
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-ft-red rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">150+</div>
                  <div>
                    <div className="font-bold text-ft-blue text-lg">Nationalities</div>
                    <div className="text-slate-500 text-xs">Studying with us</div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">10k+</div>
                  <div>
                    <div className="font-bold text-ft-blue text-lg">Success Stories</div>
                    <div className="text-slate-500 text-xs">Since 2013</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500 z-10">
                <Image
                  src="/images/students-international-campus.png"
                  alt="Inclusive student community in the UK"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Element over image */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block max-w-[240px] border border-slate-100 transform -rotate-2">
                <div className="flex items-center gap-2 mb-2 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-slate-800 font-bold text-sm leading-tight italic">
                  "The most inclusive and supportive place to prepare for my citizenship!"
                </p>
                <p className="text-xs text-slate-500 mt-2 font-bold">— Fatima, A1 English Student</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-red-400 rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLUE CTA BANNER ================= */}
      <section className="py-20 bg-ft-blue relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start your journey?
            </h2>
            <h3 className="text-xl md:text-2xl text-blue-100 mb-10">
              Speak with us today on <span className="text-white font-bold decoration-ft-red underline decoration-4 underline-offset-4 pointer-events-none">07523 678 891</span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#pricing" className="bg-ft-red hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-transform">
                Get Started
              </a>
              <a href="https://wa.me/447523723326" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
                <FaWhatsapp className="w-6 h-6" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-6 text-yellow-400">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
          </div>
          <h2 className="text-4xl font-extrabold text-ft-blue mb-16">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">M</div>
                <div>
                  <h4 className="font-bold text-slate-900">Marian Berbecila</h4>
                  <div className="text-slate-500 text-xs">Life in the UK Student</div>
                </div>
                <FaGoogle className="ml-auto text-slate-300 w-6 h-6" />
              </div>
              <p className="text-slate-600 italic leading-relaxed">After joining the classes for the Gedling Knowledge Test got my certificate within weeks. The teachings are very interactive and helpful.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl font-bold">K</div>
                <div>
                  <h4 className="font-bold text-slate-900">Kelly Luz</h4>
                  <div className="text-slate-500 text-xs">Life in the UK Student</div>
                </div>
                <FaGoogle className="ml-auto text-slate-300 w-6 h-6" />
              </div>
              <p className="text-slate-600 italic leading-relaxed">I very happy. Fast track excellent. I passed the first time. Thank you fast track.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold">T</div>
                <div>
                  <h4 className="font-bold text-slate-900">Tasawar Hussain</h4>
                  <div className="text-slate-500 text-xs">Driving Theory Student</div>
                </div>
                <FaGoogle className="ml-auto text-slate-300 w-6 h-6" />
              </div>
              <p className="text-slate-600 italic leading-relaxed">Good luck everyone who want pass the life and UK test join the fast track training.</p>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-12 items-center flex-wrap opacity-80 pl-16">
            <div className="flex items-center gap-3">
              <div style={{ position: 'relative', width: '32px', height: '32px' }}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google" fill className="object-contain" />
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900 text-sm">Google Reviews</div>
                <div className="text-yellow-500 text-xs">★★★★★ 4.9/5</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 px-2 py-1 rounded font-bold text-black text-sm">Yell</div>
              <div className="text-left">
                <div className="font-bold text-slate-900 text-sm">Yell.com</div>
                <div className="text-yellow-500 text-xs">★★★★★ 4.8/5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FIXED WHATSAPP BUTTON ================= */}
      <a href="https://wa.me/447523723326" className="fixed bottom-8 right-8 z-50 bg-ft-green text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-600 transition-all flex items-center gap-3 font-bold hover:scale-105 active:scale-95 group">
        <FaWhatsapp className="w-6 h-6 group-hover:animate-pulse" /> WhatsApp Us
      </a>

    </main>
  );
}
