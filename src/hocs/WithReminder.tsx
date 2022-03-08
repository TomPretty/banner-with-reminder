import { useState } from "react";
import { BannerProps } from "../types/banner";

export interface BannerWithReminderProps extends BannerProps {
  onReminderCtaClick: () => void;
}

export interface ReminderOptions {
	background: string;
}

export function WithReminder(
  Banner: (props: BannerWithReminderProps) => JSX.Element,
	options: ReminderOptions,
) {
  function Wrapped(innerProps: BannerProps) {
    const [isReminderOpen, setIsReminderOpen] = useState(false);

    return (
      <article>
        <Banner
          copy={innerProps.copy}
          onReminderCtaClick={() => setIsReminderOpen(true)}
        />

        {isReminderOpen && (
          <section style={{background: options.background }}>
            <p>This is the reminder signup form</p>

            <input type="text" />

            <button>Set reminder</button>
            <button onClick={() => setIsReminderOpen(false)}>Close</button>
          </section>
        )}
      </article>
    );
  }

	return Wrapped
}
