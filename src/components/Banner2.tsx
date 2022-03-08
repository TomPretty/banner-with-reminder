import React from "react";
import { BannerWithReminderProps, WithReminder } from "../hocs/WithReminder";

function Banner({ copy, onReminderCtaClick }: BannerWithReminderProps ) {

	return (
		<section>
			<header>
				<h2>{copy.header}</h2>
			</header>

			<p>{copy.body}</p>

			<div>
				<button>Support</button>
				<button onClick={onReminderCtaClick}>Remind me in May</button>
			</div>
		</section>
	)
}

export default WithReminder(Banner, { background: "blue" })