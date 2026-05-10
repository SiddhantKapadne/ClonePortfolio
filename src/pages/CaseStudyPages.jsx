import { useNavigate } from 'react-router-dom'
import ChatbotCaseStudy from '../components/ChatbotCaseStudy'
import ServiceDesignCaseStudy from '../components/ServiceDesignCaseStudy'
import ArthAiCaseStudy from '../components/ArthAiCaseStudy'
import MapCaseStudy from '../components/MapCaseStudy'
import { WORK_HOME } from '../constants/workRoutes'

function useBackToWork() {
  const navigate = useNavigate()
  return () => navigate(WORK_HOME)
}

export function ChatbotCaseStudyPage({ onResumeClick }) {
  const onBack = useBackToWork()
  return <ChatbotCaseStudy onBack={onBack} onResumeClick={onResumeClick} />
}

export function ServiceDesignCaseStudyPage({ onResumeClick }) {
  const onBack = useBackToWork()
  return <ServiceDesignCaseStudy onBack={onBack} onResumeClick={onResumeClick} />
}

export function ArthAiCaseStudyPage({ onResumeClick }) {
  const onBack = useBackToWork()
  return <ArthAiCaseStudy onBack={onBack} onResumeClick={onResumeClick} />
}

export function MapCaseStudyPage({ onResumeClick }) {
  const onBack = useBackToWork()
  return <MapCaseStudy onBack={onBack} onResumeClick={onResumeClick} />
}
