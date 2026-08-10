export type BusinessModel =
  | "Products"
  | "Services"
  | "Subscriptions"
  | "Rentals"
  | "Digital Products";

export type AIBehaviorConfig = {
  model: BusinessModel;
  behavior: string;
};

const AI_BEHAVIOR_BY_MODEL: Record<BusinessModel, string> = {
  Products: "AI recommends products.",
  Services: "AI books appointments.",
  Subscriptions: "AI sells subscription plans.",
  Rentals: "AI checks availability.",
  "Digital Products": "AI delivers downloadable products.",
};

export const BUSINESS_MODELS: BusinessModel[] = [
  "Products",
  "Services",
  "Subscriptions",
  "Rentals",
  "Digital Products",
];

export function getAIBehaviorForBusinessModel(model: string): AIBehaviorConfig | undefined {
  if (BUSINESS_MODELS.includes(model as BusinessModel)) {
    return {
      model: model as BusinessModel,
      behavior: AI_BEHAVIOR_BY_MODEL[model as BusinessModel],
    };
  }
  return undefined;
}

export function getAIBehaviorsForBusinessModels(models: string[]): AIBehaviorConfig[] {
  return models
    .map((model) => getAIBehaviorForBusinessModel(model))
    .filter((config): config is AIBehaviorConfig => Boolean(config));
}

export function getAIBehaviorSummary(models: string[]): string[] {
  return getAIBehaviorsForBusinessModels(models).map((config) => config.behavior);
}
