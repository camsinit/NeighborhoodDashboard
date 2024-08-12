'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  CalendarOutlined,
  TeamOutlined,
  ShopOutlined,
  AlertOutlined,
  HeartOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Shared Calendar for Local Events',
      description:
        'Never miss out on what’s happening in your neighborhood with our shared calendar.',
      icon: <CalendarOutlined />,
    },
    {
      heading: 'Community Groups',
      description: 'Join or create groups based on your interests and hobbies.',
      icon: <TeamOutlined />,
    },
    {
      heading: 'Local Offerings',
      description:
        'Discover and offer goods and services within your community.',
      icon: <ShopOutlined />,
    },
    {
      heading: 'Emergency Information',
      description: 'Stay informed with real-time emergency updates.',
      icon: <AlertOutlined />,
    },
    {
      heading: 'Needs/Wants Board',
      description: 'Express your needs or offer help to your neighbors.',
      icon: <HeartOutlined />,
    },
    {
      heading: 'User Profiles',
      description:
        'Manage your account and connect with other residents easily.',
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Local Resident',
      content:
        'This platform has transformed our neighborhood. We are more connected and engaged than ever before!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Community Organizer',
      content:
        'Organizing events and communicating with residents has never been easier. This platform is a game-changer.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Michael Johnson',
      designation: 'Local Business Owner',
      content:
        'I’ve seen a significant increase in local support for my business. Highly recommend this platform!',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description:
        'For individuals looking to stay connected with their community.',
      monthly: 9,
      yearly: 69,
      features: ['Shared Calendar', 'Community Groups'],
    },
    {
      title: 'Pro',
      description: 'For community organizers and local businesses.',
      monthly: 19,
      yearly: 149,
      features: [
        'All Basic Features',
        'Local Offerings',
        'Emergency Information',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'For large communities and organizations.',
      monthly: 49,
      yearly: 399,
      features: ['All Pro Features', 'Needs/Wants Board', 'User Profiles'],
    },
  ]

  const questionAnswers = [
    {
      question: 'How do I join a community group?',
      answer:
        'Simply navigate to the Community Groups section and select the group you’re interested in.',
    },
    {
      question: 'Can I create my own events?',
      answer:
        'Yes, you can create and manage events through the shared calendar feature.',
    },
    {
      question: 'Is there a mobile app available?',
      answer:
        'Yes, our platform is accessible via a mobile app available on both iOS and Android.',
    },
    {
      question: 'How do I report an emergency?',
      answer:
        'Use the Emergency Information section to report and stay updated on emergencies.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create your account to get started.',
    },
    {
      heading: 'Join Your Community',
      description: 'Connect with your local neighborhood.',
    },
    {
      heading: 'Engage and Participate',
      description: 'Join groups, attend events, and share resources.',
    },
    {
      heading: 'Stay Informed',
      description: 'Receive real-time updates and emergency information.',
    },
  ]

  const painPoints = [
    {
      emoji: '😞',
      title: 'Feeling Isolated',
    },
    {
      emoji: '📅',
      title: 'Missing Local Events',
    },
    {
      emoji: '🆘',
      title: 'Lack of Emergency Info',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Reimagine Your Neighborhood"
        subtitle="Connect, Engage, and Thrive Together"
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/Lw4NEz-neighborhooddashboard-mSDH"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="happy neighbors"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="The Community Disconnection Problem"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Empower Your Community"
        subtitle="Tools to Connect and Engage"
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="Hear from Our Users"
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Affordable Plans for Everyone"
        subtitle="Choose the plan that fits your needs"
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We’ve got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Join Your Community Today"
        subtitle="Sign up now and start connecting with your neighbors."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
