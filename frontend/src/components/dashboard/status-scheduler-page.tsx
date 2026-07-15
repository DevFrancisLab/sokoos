import type { Dispatch, SetStateAction } from "react";
import { CalendarClock, ImagePlus, Sparkles } from "lucide-react";

type ScheduledPost = {
  id: string;
  caption: string;
  date: string;
  time: string;
  image: string;
};

type NewPost = {
  image: string;
  caption: string;
  date: string;
  time: string;
  source: string;
  needsAttention: boolean;
};

type StatusSchedulerPageProps = {
  CARD: string;
  BUTTON_PRIMARY: string;
  BUTTON_SECONDARY: string;
  INPUT_FIELD: string;
  scheduledPosts: ScheduledPost[];
  newPost: NewPost;
  setNewPost: Dispatch<SetStateAction<NewPost>>;
  imageLabel: string;
  setImageLabel: Dispatch<SetStateAction<string>>;
};

export default function StatusSchedulerPage({
  CARD,
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
  INPUT_FIELD,
  scheduledPosts,
  newPost,
  setNewPost,
  imageLabel,
  setImageLabel,
}: StatusSchedulerPageProps) {
  return (
    <div className="space-y-6">
      <div className={`${CARD} border-[#ECFDF5] bg-gradient-to-br from-[#F0FDF4] to-white`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">Broadcasts and updates</p>
            <h1 className="mt-2 text-[34px] font-semibold text-[#0F172A]">Create simple, consistent updates that keep customers informed</h1>
            <p className="mt-3 text-[15px] text-[#475569]">You can plan messages for promotions, service updates, and reminders without needing a social media team.</p>
          </div>
          <div className="rounded-[24px] border border-[#D1FAE5] bg-white/80 px-4 py-3 text-sm font-semibold text-[#065F46]">
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Great for owner-led updates</div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className={`${CARD}`}>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-[#22C55E]" />
            <h2 className="text-[24px] font-semibold text-[#0F172A]">Planned broadcasts</h2>
          </div>
          <div className="mt-5 space-y-3">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="rounded-[20px] border border-[#EEF2F6] bg-[#F9FAFB] p-4">
                <p className="font-semibold text-[#111827]">{post.caption}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-[#64748B]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.time}</span>
                  <span>•</span>
                  <span>{post.image}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${CARD}`}>
          <h2 className="text-[24px] font-semibold text-[#0F172A]">Create a new update</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="font-medium text-[#111827]">Caption</label>
              <textarea value={newPost.caption} onChange={(event) => setNewPost({ ...newPost, caption: event.target.value })} className={`${INPUT_FIELD} min-h-24`} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="font-medium text-[#111827]">Date</label>
                <input value={newPost.date} onChange={(event) => setNewPost({ ...newPost, date: event.target.value })} className={INPUT_FIELD} />
              </div>
              <div>
                <label className="font-medium text-[#111827]">Time</label>
                <input value={newPost.time} onChange={(event) => setNewPost({ ...newPost, time: event.target.value })} className={INPUT_FIELD} />
              </div>
            </div>
            <div className="rounded-[20px] border border-dashed border-[#D1FAE5] bg-[#F0FDF4] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#047857]">
                <ImagePlus className="h-4 w-4" />
                {imageLabel}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" className={BUTTON_PRIMARY}>Schedule update</button>
              <button type="button" className={BUTTON_SECONDARY}>Save draft</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
