import { socials, contact } from "../data";
import { Card, CardBody, CardHeader } from "../components/ui/Card";
import {
   TerminalSection,
   TerminalLink,
   TerminalCard,
   TerminalBadge,
   TerminalList,
} from "../components/ui/Terminal/TOutput";

export const social = () => (
   <div className="space-y-4">
      <TerminalSection title="Social Presence">
         <div className="space-y-3">
            {socials.map((social, idx) => (
               <Card key={idx} variant="outline" className="rounded-md">
                  <CardHeader>
                     <div className="flex items-center gap-2">
                        <span className="text-xl">{social.icon}</span>
                        <span className="font-semibold text-sm">{social.platform}</span>
                     </div>
                  </CardHeader>
                  <CardBody>
                     <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                           <span className="text-(--muted)">Handle:</span>
                           <TerminalBadge>{social.handle}</TerminalBadge>
                        </div>
                        <TerminalLink href={social.url}>{social.url}</TerminalLink>
                     </div>
                  </CardBody>
               </Card>
            ))}
         </div>
      </TerminalSection>

      <TerminalCard variant="accent">
         <div className="text-sm">
            💡 Most active on <strong>GitHub</strong> and <strong>Instagram</strong>
         </div>
      </TerminalCard>
   </div>
);

export const socialsCmd = social;

export const githubCmd = () => {
   window.open("https://github.com/bug-free-dev", "_blank");
   return (
      <TerminalCard variant="success">
         <div className="space-y-2 text-sm">
            <div>🐙 Opening GitHub profile...</div>
            <TerminalLink href="https://github.com/bug-free-dev">
               github.com/bug-free-dev
            </TerminalLink>
         </div>
      </TerminalCard>
   );
};

export const instagram = () => {
   window.open("https://www.instagram.com/itsme.shadow11/", "_blank");
   return (
      <TerminalCard variant="success">
         <div className="space-y-2 text-sm">
            <div>📸 Opening Instagram profile...</div>
            <TerminalLink href="https://www.instagram.com/itsme.shadow11/">
               @itsme.shadow11
            </TerminalLink>
         </div>
      </TerminalCard>
   );
};

export const twitter = () => {
   window.open("https://twitter.com/bugfreedev", "_blank");
   return (
      <TerminalCard variant="success">
         <div className="space-y-2 text-sm">
            <div>🐦 Opening Twitter/X profile...</div>
            <TerminalLink href="https://twitter.com/bugfreedev">@bugfreedev</TerminalLink>
         </div>
      </TerminalCard>
   );
};

export const npm = () => {
   window.open("https://npmjs.com/~bugfreedev", "_blank");
   return (
      <TerminalCard variant="success">
         <div className="space-y-2 text-sm">
            <div>📦 Opening npm profile...</div>
            <TerminalLink href="https://npmjs.com/~bugfreedev">npmjs.com/~bugfreedev</TerminalLink>
         </div>
      </TerminalCard>
   );
};

export const email = () => (
   <div className="space-y-3">
      <TerminalSection title="Email Contact">
         <TerminalCard variant="accent">
            <div className="space-y-2">
               <div className="flex items-center gap-2">
                  <span className="text-xl">📧</span>
                  <span className="font-semibold">{contact.email}</span>
               </div>
               <TerminalLink href={`mailto:${contact.email}`}>Send me an email</TerminalLink>
            </div>
         </TerminalCard>
      </TerminalSection>

      <TerminalCard variant="muted">
         <div className="text-sm space-y-1">
            <div className="font-semibold text-(--accent)">Response Time:</div>
            <TerminalList
               items={[
                  "Usually within 24 hours",
                  "Fastest on weekdays",
                  "Please include context in subject line",
               ]}
               icon="→"
            />
         </div>
      </TerminalCard>
   </div>
);

export const links = () => (
   <div className="space-y-4">
      <TerminalSection title="Quick Links">
         <div className="space-y-2">
            <TerminalCard variant="muted">
               <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                     <div className="font-semibold text-(--accent) mb-2">Portfolio</div>
                     <TerminalList
                        items={[
                           <TerminalLink href="https://github.com/bug-free-dev">
                              GitHub
                           </TerminalLink>,
                           <TerminalLink href="https://npmjs.com/~bugfreedev">npm</TerminalLink>,
                        ]}
                        icon="→"
                     />
                  </div>
                  <div>
                     <div className="font-semibold text-(--accent) mb-2">Social</div>
                     <TerminalList
                        items={[
                           <TerminalLink href="https://www.instagram.com/itsme.shadow11/">
                              Instagram
                           </TerminalLink>,
                           <TerminalLink href="https://twitter.com/bugfreedev">
                              Twitter
                           </TerminalLink>,
                        ]}
                        icon="→"
                     />
                  </div>
               </div>
            </TerminalCard>
         </div>
      </TerminalSection>
   </div>
);
