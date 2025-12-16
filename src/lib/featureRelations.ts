// Feature relationships and routing configuration
export type FeatureKey = 
  | 'chat' 
  | 'chatWidget' 
  | 'pinboard' 
  | 'aiPinbot' 
  | 'faqPinbot' 
  | 'branding' 
  | 'analytics' 
  | 'chatroomManagement' 
  | 'subAccount';

export interface FeatureConfig {
  key: FeatureKey;
  route: string;
  // Translation key for the exploreFeatures section of each page
  exploreFeaturesKey: string; // e.g., 'features.chatPage.exploreFeatures'
  // Translation key within exploreFeatures for this feature
  translationSubKey: string; // e.g., 'aiPinBot', 'pinBoard', 'chatWidget', etc.
  icon: string; // Icon component name from lucide-react
}

// All available features
export const ALL_FEATURES: Record<FeatureKey, FeatureConfig> = {
  chat: {
    key: 'chat',
    route: '/features/chat',
    exploreFeaturesKey: 'features.chatPage.exploreFeatures',
    translationSubKey: 'chat',
    icon: 'MessageSquare'
  },
  chatWidget: {
    key: 'chatWidget',
    route: '/features/chat-widget',
    exploreFeaturesKey: 'features.chatWidgetPage.exploreFeatures',
    translationSubKey: 'chatWidget',
    icon: 'ExternalLink'
  },
  pinboard: {
    key: 'pinboard',
    route: '/features/pinboard',
    exploreFeaturesKey: 'features.pinBoardPage.exploreFeatures',
    translationSubKey: 'pinBoard',
    icon: 'Link2'
  },
  aiPinbot: {
    key: 'aiPinbot',
    route: '/features/ai-pinbot',
    exploreFeaturesKey: 'features.aiPinbotPage.exploreFeatures',
    translationSubKey: 'aiPinBot',
    icon: 'Bot'
  },
  faqPinbot: {
    key: 'faqPinbot',
    route: '/features/faq-pinbot',
    exploreFeaturesKey: 'features.faqPinbotPage.exploreFeatures',
    translationSubKey: 'faqPinbot',
    icon: 'HelpCircle'
  },
  branding: {
    key: 'branding',
    route: '/features/branding',
    exploreFeaturesKey: 'features.brandingPage.exploreFeatures',
    translationSubKey: 'branding',
    icon: 'Palette'
  },
  analytics: {
    key: 'analytics',
    route: '/features/analytics',
    exploreFeaturesKey: 'features.analyticsPage.exploreFeatures',
    translationSubKey: 'dataAnalysis', // Note: analytics uses 'dataAnalysis' in some exploreFeatures
    icon: 'BarChart3'
  },
  chatroomManagement: {
    key: 'chatroomManagement',
    route: '/features/chatroom-management',
    exploreFeaturesKey: 'features.chatroomManagementPage.exploreFeatures',
    translationSubKey: 'chatroomManagement',
    icon: 'FolderOpen'
  },
  subAccount: {
    key: 'subAccount',
    route: '/features/sub-account',
    exploreFeaturesKey: 'features.subAccountPage.exploreFeatures',
    translationSubKey: 'subAccount',
    icon: 'Users'
  }
};

// Feature relationships - which features are related to each feature
export const FEATURE_RELATIONS: Record<FeatureKey, FeatureKey[]> = {
  chat: ['aiPinbot', 'chatWidget', 'pinboard', 'branding', 'analytics'],
  chatWidget: ['pinboard', 'aiPinbot', 'analytics', 'branding', 'chat'],
  pinboard: ['chatWidget', 'aiPinbot', 'analytics', 'branding', 'chat'],
  aiPinbot: ['chat', 'chatWidget', 'faqPinbot', 'analytics', 'chatroomManagement'],
  faqPinbot: ['aiPinbot', 'chat', 'chatWidget', 'analytics', 'chatroomManagement'],
  branding: ['chat', 'chatWidget', 'pinboard', 'aiPinbot', 'analytics'],
  analytics: ['chat', 'chatWidget', 'aiPinbot', 'chatroomManagement', 'subAccount'],
  chatroomManagement: ['subAccount', 'analytics', 'aiPinbot', 'chat', 'faqPinbot'],
  subAccount: ['chatroomManagement', 'analytics', 'chat', 'aiPinbot', 'branding']
};

/**
 * Get 3 random related features for a given feature
 * Excludes the current feature itself
 */
export function getRelatedFeatures(currentFeature: FeatureKey, count: number = 3): FeatureConfig[] {
  const related = FEATURE_RELATIONS[currentFeature] || [];
  const available = related
    .filter(key => key !== currentFeature)
    .map(key => ALL_FEATURES[key])
    .filter(Boolean);
  
  // Shuffle and take first N
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

