import { bio, contact } from "../data";
import {
   TerminalSection,
   TerminalTable,
   TerminalList,
   TerminalCard,
   TerminalDivider,
   TerminalBadge,
} from "../components/ui/Terminal/";

export const whoami = () => (
   <div className="space-y-3">
      <TerminalSection title="Identity">
         <div className="space-y-2">
            <div className="text-lg font-bold text-(--accent)">{bio.name}</div>
            <div className="text-(--muted)">{bio.title}</div>
            <div className="mt-2">
               <TerminalBadge variant="success">{bio.availability}</TerminalBadge>
            </div>
         </div>
      </TerminalSection>

      <TerminalDivider />

      <div className="text-sm text-(--muted)">
         💡 Try <code className="text-(--accent)">about</code> for detailed info
      </div>
   </div>
);

export const about = () => (
   <div className="space-y-4">
      <TerminalSection title={`About ${bio.name}`}>
         <div className="space-y-3">
            {bio.description.map((para, idx) => (
               <p key={idx} className="text-sm leading-relaxed">
                  {para}
               </p>
            ))}
         </div>
      </TerminalSection>

      <TerminalDivider />

      <TerminalSection title="Philosophy">
         <TerminalList items={bio.philosophy} icon="→" className="text-sm" />
      </TerminalSection>

      <TerminalDivider />

      <TerminalSection title="Interests">
         <div className="flex flex-wrap gap-2">
            {bio.interests.map((interest, idx) => (
               <TerminalBadge key={idx} variant="default">
                  {interest}
               </TerminalBadge>
            ))}
         </div>
      </TerminalSection>

      <TerminalCard variant="accent">
         <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <span className="text-sm">
               <strong>Current Focus:</strong> {bio.currentFocus}
            </span>
         </div>
      </TerminalCard>
   </div>
);

export const bio_cmd = about;

export const contactCmd = () => (
   <div className="space-y-4">
      <TerminalSection title="Contact Information">
         <TerminalTable
            data={[
               { label: "Email", value: contact.email },
               { label: "Location", value: contact.location },
               { label: "Timezone", value: contact.timezone },
               {
                  label: "Status",
                  value: <TerminalBadge variant="success">{contact.availability}</TerminalBadge>,
               },
               { label: "Preferred", value: contact.preferredContact },
            ]}
         />
      </TerminalSection>

      <TerminalCard variant="muted">
         <div className="text-sm">
            <strong className="text-(--accent)">Best way to reach me:</strong>
            <p className="mt-1 text-(--muted)">
               Email or GitHub issues. I typically respond within 24 hours.
            </p>
         </div>
      </TerminalCard>

      <div className="text-xs text-(--muted)">
         💡 Use <code className="text-(--accent)">social</code> to see all social links
      </div>
   </div>
);

export const location = () => (
   <div className="space-y-3">
      <TerminalSection title="Location">
         <div className="space-y-2">
            <div className="flex items-center gap-2">
               <span className="text-2xl">📍</span>
               <div>
                  <div className="font-semibold">{contact.location}</div>
                  <div className="text-sm text-(--muted)">{contact.timezone}</div>
               </div>
            </div>
         </div>
      </TerminalSection>

      <TerminalCard variant="accent">
         <div className="text-sm">
            🌏 Open to <strong>remote opportunities</strong> worldwide
         </div>
      </TerminalCard>
   </div>
);

export const resume = () => (
   <div className="space-y-3">
      <TerminalSection title="Resume / CV">
         <TerminalList
            items={[
               "📄 Full resume available on request",
               "💼 LinkedIn profile (coming soon)",
               "🐙 Check out my GitHub for live work",
            ]}
         />
      </TerminalSection>

      <TerminalCard variant="muted">
         <div className="text-sm space-y-2">
            <div>Want to see my work? Try these commands:</div>
            <div className="flex flex-wrap gap-2 mt-2">
               <TerminalBadge>projects</TerminalBadge>
               <TerminalBadge>skills</TerminalBadge>
               <TerminalBadge>github</TerminalBadge>
            </div>
         </div>
      </TerminalCard>
   </div>
);
