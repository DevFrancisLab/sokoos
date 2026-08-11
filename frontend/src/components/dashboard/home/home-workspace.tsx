interface HomeWorkspaceProps {
  handleLogout: () => void;
  CARD: string;
  SECTION_HEADING: string;
  CARD_TITLE: string;
}

export function HomeWorkspace({ handleLogout, CARD, SECTION_HEADING, CARD_TITLE }: HomeWorkspaceProps) {
  return (
    <div className="h-full overflow-y-auto space-y-6 pr-2">
      <div className="relative overflow-hidden rounded-[32px] border border-[#DCFCE7] bg-gradient-to-br from-[#F0FDF4] via-white to-[#ECFDF5] p-8 shadow-sm">
        <div className="absolute right-[-60px] top-[-60px] h-56 w-56 rounded-full bg-[#22C55E]/10 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[-80px] h-72 w-72 rounded-full bg-[#16A34A]/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16A34A]">
              AI Growth Dashboard
            </p>

            <h1 className="mt-3 text-4xl font-bold text-[#111827]">
              Good morning, Francis 👋 Your AI Employee is already at
              work.
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-[#64748B] leading-8">
              Your AI is responding to customers, qualifying leads,
              booking appointments and following up automatically.
              Here's how your business is growing today.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl bg-[#16A34A] px-5 py-3 font-semibold text-white hover:bg-[#15803D] transition">
                Open Inbox
              </button>

              <button className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition">
                Chat with AI Employee
              </button>

              <button className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition">
                Create Campaign
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-3 font-semibold text-[#111827] hover:bg-[#F9FAFB] transition"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="grid w-full max-w-md grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#64748B]">AI Conversations</p>

              <p className="mt-2 text-3xl font-bold text-[#111827]">
                124
              </p>

              <p className="mt-1 text-sm text-[#16A34A]">↑ 18 today</p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#64748B]">Qualified Leads</p>

              <p className="mt-2 text-3xl font-bold text-[#111827]">
                27
              </p>

              <p className="mt-1 text-sm text-[#16A34A]">
                AI identified today
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#64748B]">Appointments</p>

              <p className="mt-2 text-3xl font-bold text-[#111827]">
                8
              </p>

              <p className="mt-1 text-sm text-[#16A34A]">
                Booked automatically
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#64748B]">Customer Rating</p>

              <p className="mt-2 text-3xl font-bold text-[#111827]">
                ★ 4.9
              </p>

              <p className="mt-1 text-sm text-[#16A34A]">
                Based on AI conversations
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className={CARD}>
        <div className="flex items-center justify-between">
          <div>
            <p className={SECTION_HEADING}>Ask Sokoos</p>

            <h2 className={CARD_TITLE}>Your AI Employee is ready</h2>
          </div>

          <div className="text-[#22C55E] text-3xl">🤖</div>
        </div>

        <div className="mt-6">
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-5 py-4">
            <input
              type="text"
              placeholder="Ask your AI Employee anything..."
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#94A3B8]"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
              Create Campaign
            </button>

            <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
              Generate Quote
            </button>

            <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
              Build Landing Page
            </button>

            <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
              Show Today's Leads
            </button>

            <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
              Train on PDF
            </button>

            <button className="rounded-full border border-[#E5E7EB] px-4 py-2 text-sm hover:bg-[#F9FAFB]">
              Summarize Conversations
            </button>
          </div>
        </div>
      </section>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <section className={CARD}>
          <div className="flex items-center justify-between">
            <div>
              <p className={SECTION_HEADING}>AI Command Center</p>

              <h2 className={CARD_TITLE}>AI Employee Status</h2>
            </div>

            <div className="text-[#22C55E] text-3xl">🤖</div>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex justify-between">
              <span>AI Confidence</span>
              <strong>96%</strong>
            </div>

            <div className="flex justify-between">
              <span>Currently Replying</span>
              <strong>17 customers</strong>
            </div>

            <div className="flex justify-between">
              <span>Human Takeovers</span>
              <strong>4</strong>
            </div>

            <div className="flex justify-between">
              <span>Average Response</span>
              <strong>6 sec</strong>
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl bg-[#16A34A] py-3 font-semibold text-white hover:bg-[#15803D]">
            Train AI Employee
          </button>
        </section>

        <section className={CARD}>
          <div className="flex items-center justify-between">
            <div>
              <p className={SECTION_HEADING}>Business Knowledge</p>

              <h2 className={CARD_TITLE}>Manage Knowledge</h2>
            </div>

            <div className="text-3xl">📚</div>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex justify-between">
              <span>Products</span>
              <strong>12</strong>
            </div>

            <div className="flex justify-between">
              <span>FAQs</span>
              <strong>18</strong>
            </div>

            <div className="flex justify-between">
              <span>Policies</span>
              <strong>7</strong>
            </div>

            <div className="flex justify-between">
              <span>Training Score</span>
              <strong className="text-[#16A34A]">92%</strong>
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl border border-[#E5E7EB] py-3 font-semibold hover:bg-[#F9FAFB]">
            Improve Knowledge
          </button>
        </section>

        <section className={CARD}>
          <div className="flex items-center justify-between">
            <div>
              <p className={SECTION_HEADING}>Customer Growth</p>

              <h2 className={CARD_TITLE}>Growth Today</h2>
            </div>

            <div className="text-3xl">💰</div>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex justify-between">
              <span>Qualified Leads</span>
              <strong>24</strong>
            </div>

            <div className="flex justify-between">
              <span>Quotes Sent</span>
              <strong>11</strong>
            </div>

            <div className="flex justify-between">
              <span>Follow-ups Sent</span>
              <strong>8</strong>
            </div>

            <div className="flex justify-between">
              <span>Conversions</span>
              <strong className="text-[#16A34A]">8 customers</strong>
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl border border-[#E5E7EB] py-3 font-semibold hover:bg-[#F9FAFB]">
            View Customers
          </button>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
        <section className={CARD}>
          <div className="flex items-center justify-between">
            <div>
              <p className={SECTION_HEADING}>Recent AI Activity</p>

              <h2 className={CARD_TITLE}>
                What your AI Employee has been doing
              </h2>
            </div>

            <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-semibold text-[#15803D]">
              Live
            </span>
          </div>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFDF5]">
                🤖
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  AI answered a pricing enquiry
                </p>

                <p className="text-sm text-[#64748B]">
                  James asked about installation pricing and received an
                  instant reply.
                </p>
              </div>

              <span className="text-sm text-[#94A3B8]">2 min ago</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF]">
                📅
              </div>

              <div className="flex-1">
                <p className="font-semibold">Appointment booked</p>

                <p className="text-sm text-[#64748B]">
                  Site installation scheduled automatically for
                  tomorrow.
                </p>
              </div>

              <span className="text-sm text-[#94A3B8]">12 min ago</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF3C7]">
                💬
              </div>

              <div className="flex-1">
                <p className="font-semibold">Follow-up sent</p>

                <p className="text-sm text-[#64748B]">
                  AI followed up with a customer who requested a
                  quotation yesterday.
                </p>
              </div>

              <span className="text-sm text-[#94A3B8]">21 min ago</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF2F2]">
                👤
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  Human takeover requested
                </p>

                <p className="text-sm text-[#64748B]">
                  AI detected a negotiation and asked you to continue
                  the conversation.
                </p>
              </div>

              <span className="text-sm text-[#94A3B8]">37 min ago</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF4FF]">
                ⭐
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  Customer left a 5-star rating
                </p>

                <p className="text-sm text-[#64748B]">
                  &quot;Fast replies and excellent service.&quot;
                </p>
              </div>

              <span className="text-sm text-[#94A3B8]">1 hour ago</span>
            </div>
          </div>
        </section>

        <section className={CARD}>
          <p className={SECTION_HEADING}>WhatsApp Overview</p>

          <h2 className={CARD_TITLE}>Current Inbox Status</h2>

          <div className="mt-8 space-y-5">
            <div className="flex justify-between">
              <span className="text-[#64748B]">
                Unread Conversations
              </span>

              <strong>3</strong>
            </div>

            <div className="flex justify-between">
              <span className="text-[#64748B]">AI Handling</span>

              <strong className="text-[#16A34A]">17</strong>
            </div>

            <div className="flex justify-between">
              <span className="text-[#64748B]">Waiting For You</span>

              <strong className="text-[#DC2626]">2</strong>
            </div>

            <div className="flex justify-between">
              <span className="text-[#64748B]">Resolved Today</span>

              <strong>36</strong>
            </div>

            <div className="flex justify-between">
              <span className="text-[#64748B]">Average Response</span>

              <strong className="text-[#16A34A]">6 sec</strong>
            </div>

            <button className="mt-6 w-full rounded-xl bg-[#16A34A] py-3 font-semibold text-white transition hover:bg-[#15803D]">
              Open Inbox
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
