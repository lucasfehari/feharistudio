import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Compass } from 'lucide-react';
import { ClientProfile, PROFILE_OPTIONS } from '../../data/pricingData';

interface ProfileSelectorProps {
  selectedProfile: ClientProfile;
  onSelectProfile: (profile: ClientProfile) => void;
}

const iconsMap: Record<ClientProfile, React.ElementType> = {
  agencia: Briefcase,
  empresa: Building2,
  avulso: Compass,
};

const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  selectedProfile,
  onSelectProfile,
}) => {
  const activeOption = PROFILE_OPTIONS.find((opt) => opt.id === selectedProfile) || PROFILE_OPTIONS[0];

  return (
    <div className="w-full">
      {/* Segmented Control Bar */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Tipo de cliente"
          className="relative inline-flex w-full max-w-2xl flex-col sm:flex-row items-stretch sm:items-center rounded-2xl sm:rounded-full border border-white/10 bg-[#0c0c0c] p-1.5 shadow-2xl backdrop-blur-md"
        >
          {PROFILE_OPTIONS.map((option) => {
            const isSelected = selectedProfile === option.id;
            const Icon = iconsMap[option.id];

            return (
              <button
                key={option.id}
                role="tab"
                id={`tab-${option.id}`}
                aria-selected={isSelected}
                aria-controls={`tabpanel-${option.id}`}
                onClick={() => onSelectProfile(option.id)}
                className={`relative flex flex-1 items-center justify-center gap-2.5 rounded-xl sm:rounded-full py-3 px-4 text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="profileTabHighlight"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    className="absolute inset-0 rounded-xl sm:rounded-full bg-gradient-to-r from-accent to-[#ff632b] shadow-[0_8px_25px_rgba(255,70,31,0.35)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-white/50'}`} />
                  <span className="whitespace-nowrap font-medium">{option.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Profile Context Description */}
      <div className="mx-auto mt-6 max-w-xl text-center">
        <motion.div
          key={activeOption.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-4"
        >
          <div className="inline-block rounded-full bg-accent/15 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent mb-2">
            {activeOption.recommendedBadge}
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            {activeOption.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSelector;

