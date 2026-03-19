import { useState } from 'react'
import { Card } from '../components/ui/card'
import { MagnifyingGlass, Pill, FirstAid, Brain, Baby, ArrowRight, Heart, ChatCircle, Drop, Bed, ForkKnife } from '@phosphor-icons/react'

type Tab = 'guides' | 'following' | 'for_you'

interface Post {
  id: string
  avatar: string
  name: string
  handle: string
  timeAgo: string
  tag: string
  tagColor: string
  content: string
  likes: number
  comments: number
  liked: boolean
}

const FOR_YOU_POSTS: Post[] = [
  {
    id: '1',
    avatar: '🌸',
    name: 'Amara O.',
    handle: 'amara_postpartum',
    timeAgo: '2h ago',
    tag: 'Week 4',
    tagColor: '#627356',
    content: "Nobody told me week 4 would be harder emotionally than week 1. The physical stuff is better but I just cried for 20 minutes over nothing today. Anyone else? 💜",
    likes: 47,
    comments: 12,
    liked: false,
  },
  {
    id: '2',
    avatar: '🌿',
    name: 'Sophie R.',
    handle: 'sophie_recovery',
    timeAgo: '5h ago',
    tag: 'C-section',
    tagColor: '#8C5A38',
    content: "6 weeks post C-section and I finally walked to the end of my street and back without stopping. It sounds so small but I actually cried. Progress is progress. 🎉",
    likes: 134,
    comments: 28,
    liked: true,
  },
  {
    id: '3',
    avatar: '🤱',
    name: 'Priya M.',
    handle: 'priya.new.mum',
    timeAgo: '1d ago',
    tag: 'Breastfeeding',
    tagColor: '#7D8F65',
    content: "Latching finally clicked at day 11. ELEVEN days of cracked nipples and tears and it just... worked. If you're struggling, please don't give up yet. It can turn around.",
    likes: 89,
    comments: 31,
    liked: false,
  },
  {
    id: '4',
    avatar: '🌙',
    name: 'Jade T.',
    handle: 'jadethompson_',
    timeAgo: '2d ago',
    tag: 'Sleep',
    tagColor: '#C4A87A',
    content: "Hot take: 'sleep when the baby sleeps' is only useful advice if you don't have anxiety, other children, or a body that refuses to switch off. We need better advice than this.",
    likes: 203,
    comments: 67,
    liked: false,
  },
]

const FOLLOWING_POSTS: Post[] = [
  {
    id: '5',
    avatar: '💜',
    name: 'Beth K.',
    handle: 'beth.kaye',
    timeAgo: '1h ago',
    tag: 'Mental health',
    tagColor: '#627356',
    content: "Finally booked my pelvic floor physio appointment after putting it off for 3 weeks. If you're hesitating — just book it. Future you will be so relieved.",
    likes: 22,
    comments: 4,
    liked: true,
  },
  {
    id: '6',
    avatar: '🌺',
    name: 'Nadia F.',
    handle: 'nadiaf_mum',
    timeAgo: '3h ago',
    tag: 'Week 2',
    tagColor: '#8C5A38',
    content: "Milk came in overnight and I woke up absolutely shocked. No one prepared me for how uncomfortable engorgement actually is. Warm shower + hand expression — genuinely life saving.",
    likes: 58,
    comments: 19,
    liked: false,
  },
  {
    id: '7',
    avatar: '🍃',
    name: 'Clara W.',
    handle: 'clara.wellbeing',
    timeAgo: '6h ago',
    tag: 'Recovery',
    tagColor: '#7D8F65',
    content: "Reminder that your partner recovering from a birth they witnessed is valid AND it doesn't compete with yours. We talked properly for the first time this week and it helped so much.",
    likes: 76,
    comments: 14,
    liked: false,
  },
]

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(post.liked)
  const [likes, setLikes] = useState(post.likes)

  function toggleLike() {
    setLiked(l => !l)
    setLikes(n => liked ? n - 1 : n + 1)
  }

  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-3"
      style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: '#E8F0DC' }}
        >
          {post.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>{post.name}</p>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${post.tagColor}18`, color: post.tagColor }}
            >
              {post.tag}
            </span>
          </div>
          <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>{post.timeAgo}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-pm-text-secondary)' }}>
        {post.content}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-1">
        <button
          onClick={toggleLike}
          className="flex items-center gap-1.5 transition-opacity active:opacity-60"
        >
          <Heart
            size={16}
            weight={liked ? 'fill' : 'regular'}
            color={liked ? '#A8473A' : 'var(--color-pm-text-muted)'}
          />
          <span className="text-xs font-medium" style={{ color: liked ? '#A8473A' : 'var(--color-pm-text-muted)' }}>
            {likes}
          </span>
        </button>
        <button className="flex items-center gap-1.5 transition-opacity active:opacity-60">
          <ChatCircle size={16} color="var(--color-pm-text-muted)" />
          <span className="text-xs font-medium" style={{ color: 'var(--color-pm-text-muted)' }}>
            {post.comments}
          </span>
        </button>
      </div>
    </div>
  )
}

interface ArticleSection {
  heading?: string
  body?: string
  items?: string[]
  type?: 'default' | 'warning' | 'tip'
}

interface Article {
  id: string
  title: string
  category: string
  icon: React.ElementType
  preview: string
  sections: ArticleSection[]
}

const ARTICLES: Article[] = [
  {
    id: 'wound-care',
    title: 'Caring for your wound at home',
    category: 'Physical Recovery',
    icon: FirstAid,
    preview: 'Keep the area clean and dry. Watch for signs of infection — redness, warmth, or discharge.',
    sections: [
      {
        body: 'Whether you had a C-section or a perineal tear, wound care in the early weeks is essential. Most wounds heal well with simple hygiene and rest.',
      },
      {
        heading: 'Daily care',
        items: [
          'Gently wash with warm water and mild soap. Pat dry — never rub.',
          'Change dressings as advised by your midwife, usually once or twice daily.',
          'Wear loose, breathable cotton underwear to reduce friction and moisture.',
          'Avoid submerging in a bath for at least 4–6 weeks or until fully healed.',
          'For perineal tears, a warm shallow sitz bath 2–3 times a day can ease discomfort.',
        ],
      },
      {
        heading: 'C-section scar care',
        items: [
          'Keep the incision site dry and open to air when possible.',
          'After 6 weeks, gentle silicone gel or strips can help reduce scar appearance.',
          'Avoid lifting anything heavier than your baby for the first 6 weeks.',
          'Support your scar with a pillow when coughing, sneezing, or getting up.',
        ],
      },
      {
        heading: 'Signs of infection — seek help promptly',
        type: 'warning',
        items: [
          'Increasing redness, warmth, or swelling around the wound',
          'Pus or unusual discharge with an unpleasant odour',
          'Fever above 38°C',
          'Wound edges opening or separating',
          'Pain that is worsening rather than gradually improving',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'Take a photo of your wound every few days so you can compare and spot changes more easily. If you are unsure about how it looks, your midwife or GP can check it.',
      },
    ],
  },
  {
    id: 'ppd',
    title: 'Understanding postpartum mood',
    category: 'Mental Wellbeing',
    icon: Brain,
    preview: 'Baby blues vs. postpartum depression: what to look for and when to reach out.',
    sections: [
      {
        body: 'Changes in mood after birth are extremely common. Understanding the difference between normal adjustment and something that needs support can help you get help at the right time.',
      },
      {
        heading: 'Baby blues (days 3–10)',
        items: [
          'Affects up to 80% of new mothers — you are not alone.',
          'Caused by a rapid drop in oestrogen and progesterone after birth.',
          'Typical feelings: tearfulness, irritability, anxiety, overwhelm.',
          'Usually resolves on its own within 1–2 weeks with rest and support.',
        ],
      },
      {
        heading: 'Postpartum depression (PPD)',
        items: [
          'Affects around 1 in 7 mothers and can develop any time in the first year.',
          'Symptoms include persistent low mood, loss of interest, difficulty bonding, exhaustion beyond normal tiredness, and intrusive thoughts.',
          'PPD is not a sign of weakness or failure — it is a medical condition that responds well to treatment.',
          'Talking therapies (CBT) and medication are both effective and safe options.',
        ],
      },
      {
        heading: 'Postpartum anxiety',
        items: [
          'Often overlooked but just as common as PPD.',
          'Signs: constant worry about the baby\'s safety, racing thoughts, physical tension, difficulty sleeping even when the baby sleeps.',
          'Speak to your GP or health visitor — this is treatable.',
        ],
      },
      {
        heading: 'Seek support if you experience',
        type: 'warning',
        items: [
          'Low or flat mood lasting more than 2 weeks',
          'Feeling disconnected from your baby',
          'Thoughts of harming yourself or your baby — call 999 or go to A&E immediately',
          'Inability to eat, sleep, or carry out basic daily tasks',
          'Hallucinations or very rapid mood swings — these may indicate postpartum psychosis, a rare but serious condition requiring urgent care',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'You do not have to wait until you are certain something is wrong. If you feel off, speak to your midwife or GP at your next contact. Describing your mood honestly at the 6-week check is one of the most useful things you can do for your recovery.',
      },
    ],
  },
  {
    id: 'feeding',
    title: 'Breastfeeding after birth',
    category: 'Feeding',
    icon: Baby,
    preview: 'Tips for establishing a good latch, managing engorgement and navigating supply concerns.',
    sections: [
      {
        body: 'Breastfeeding is natural, but that does not mean it comes naturally to everyone. The first 2–4 weeks are often the hardest. Most difficulties can be resolved with the right support.',
      },
      {
        heading: 'Getting the latch right',
        items: [
          'Your baby\'s mouth should cover most of the areola, not just the nipple.',
          'Aim for a wide, asymmetric latch — more areola visible above the lip than below.',
          'Signs of a good latch: no pain after the initial latch, you can hear swallowing, your nipple comes out round (not pinched or creased).',
          'If it hurts throughout the feed, unlatch and try again by breaking the seal with a clean finger.',
        ],
      },
      {
        heading: 'Managing engorgement (days 3–5)',
        items: [
          'Feed or express frequently — every 2–3 hours — to prevent overfilling.',
          'Cold compresses between feeds reduce swelling.',
          'Warm compresses or a warm shower just before feeding can help milk flow.',
          'Hand expression or reverse pressure softening can help a very engorged breast before latching.',
        ],
      },
      {
        heading: 'Supply concerns',
        items: [
          'Supply is built by demand — the more you feed or express, the more milk you make.',
          'Growth spurts at 2–3 weeks, 6 weeks, and 3 months often cause cluster feeding. This is normal, not a supply failure.',
          'Adequate wet nappies (6+ per day after day 5) and steady weight gain are the best signs your baby is getting enough.',
        ],
      },
      {
        heading: 'Warning signs — seek support',
        type: 'warning',
        items: [
          'Cracked or bleeding nipples that are not improving',
          'A hard, red, painful area on the breast with flu-like symptoms (may be mastitis — needs prompt treatment)',
          'Baby losing more than 10% of birth weight or not regaining it by 2 weeks',
          'Fewer than 6 wet nappies per day after day 5',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'Skin-to-skin contact in the early days — even just 20 minutes — stimulates prolactin and helps establish supply. It also regulates your baby\'s temperature, breathing, and stress hormones.',
      },
    ],
  },
  {
    id: 'pain-relief',
    title: 'Managing pain after birth',
    category: 'Medication',
    icon: Pill,
    preview: 'Safe over-the-counter options, when to take them, and what to avoid while breastfeeding.',
    sections: [
      {
        body: 'Pain is normal in the early postpartum period — from uterine cramping, perineal soreness, or surgical recovery. Managing it well helps you rest, move, and care for your baby.',
      },
      {
        heading: 'First-line options (safe while breastfeeding)',
        items: [
          'Paracetamol 1000mg every 4–6 hours (max 4g/day) — most important painkiller postpartum.',
          'Ibuprofen 400mg every 6–8 hours with food (max 1200mg/day) — add this to paracetamol for better effect.',
          'Alternating paracetamol and ibuprofen every 3 hours keeps pain more consistently managed than taking either alone.',
          'Diclofenac suppositories may be prescribed after delivery — effective for perineal pain.',
        ],
      },
      {
        heading: 'After-pains (uterine cramping)',
        items: [
          'Strongest in the first 2–3 days, and often intensify during breastfeeding as oxytocin contracts the uterus.',
          'More noticeable in second or subsequent births.',
          'Take paracetamol 30–60 minutes before a feed if cramping is severe.',
        ],
      },
      {
        heading: 'Additional comfort measures',
        items: [
          'Ice packs wrapped in cloth — apply to perineum for 10–20 minutes after birth.',
          'Witch hazel pads or cooling gel pads for perineal soreness.',
          'A soft donut cushion or valley cushion for sitting.',
          'Warm baths (once wound is assessed as safe) for general muscle aching.',
        ],
      },
      {
        heading: 'Avoid or use with caution',
        type: 'warning',
        items: [
          'Aspirin — not recommended while breastfeeding.',
          'Codeine — only if prescribed; small amounts pass into breast milk and can cause drowsiness in your baby.',
          'Do not exceed recommended doses of any medication.',
          'If pain is worsening after day 3–4 rather than improving, contact your midwife or GP.',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'Do not wait until pain is severe before taking pain relief. It is much harder to get on top of pain once it peaks. Taking paracetamol regularly for the first few days is safer and more effective than waiting.',
      },
    ],
  },
  {
    id: 'pelvic-floor',
    title: 'Pelvic floor recovery',
    category: 'Physical Recovery',
    icon: Drop,
    preview: 'Why your pelvic floor matters, how to start recovering it, and when to see a physio.',
    sections: [
      {
        body: 'The pelvic floor — a hammock of muscles supporting your bladder, bowel, and uterus — is stretched significantly during pregnancy and birth. Recovery is possible, but it takes time and consistency.',
      },
      {
        heading: 'Why it matters',
        items: [
          'Weak pelvic floor muscles can cause leaking urine when you cough, laugh, or sneeze (stress incontinence).',
          'Also linked to urgency, difficulty emptying the bladder, and in some cases, pelvic organ prolapse.',
          'Even C-section births are affected — pregnancy alone weakens the pelvic floor.',
        ],
      },
      {
        heading: 'Starting exercises (weeks 1–2)',
        items: [
          'Begin within 24 hours of birth if you feel comfortable — even a gentle, partial squeeze is beneficial.',
          'Lie down or sit. Gently squeeze as if stopping the flow of urine. Hold for 3–5 seconds, then fully release.',
          'Do 8–10 squeezes, 3 times per day. Quality matters more than quantity.',
          'Avoid holding your breath or gripping your buttocks — only the pelvic floor should engage.',
        ],
      },
      {
        heading: 'Progressing over weeks 3–6',
        items: [
          'Gradually increase hold time to 8–10 seconds as strength returns.',
          'Add "quick flicks" — fast squeezes and releases — to build reactive strength for sneezing or coughing.',
          'Start exercises before activities that increase pressure (lifting, getting up from a chair).',
        ],
      },
      {
        heading: 'Signs to see a pelvic floor physiotherapist',
        type: 'warning',
        items: [
          'Leaking urine 6+ weeks after birth, even occasionally',
          'A feeling of heaviness or something "falling out" of the vagina',
          'Difficulty fully emptying your bladder or bowel',
          'Pain during sex when you return to intimacy',
          'Persistent urgency or rushing to the toilet',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'Ask your GP for a referral to a women\'s health physiotherapist. A single assessment session can identify exactly what your pelvic floor needs — far more precise than generic exercises alone.',
      },
    ],
  },
  {
    id: 'sleep',
    title: 'Rest and sleep in early postpartum',
    category: 'Wellbeing',
    icon: Bed,
    preview: 'Strategies for managing severe sleep deprivation and protecting your recovery.',
    sections: [
      {
        body: 'Sleep deprivation is one of the hardest parts of new parenthood and has real effects on physical recovery, mood, and cognitive function. You cannot eliminate it, but you can manage it.',
      },
      {
        heading: 'Understanding your sleep situation',
        items: [
          'Newborns sleep 14–17 hours per day but rarely for more than 2–4 hours at a stretch initially.',
          'Night feeds are hormonally driven — prolactin is highest at night, which supports milk supply.',
          'Fragmented sleep is more disruptive than the same total hours of continuous sleep. This is why you may feel exhausted even after sleeping 7+ hours in total.',
        ],
      },
      {
        heading: 'Practical strategies',
        items: [
          '"Sleep when the baby sleeps" is useful — but only when you genuinely can. Do not force yourself to nap if it causes more anxiety.',
          'A single 90-minute nap per day matters more than multiple short ones — it allows a full sleep cycle.',
          'Accept help: if a partner, family member, or friend can take one night feed per week, it makes a difference.',
          'Keep the bedroom dark and use white noise — it helps both you and the baby settle faster.',
          'Lower the bar for everything else. Sleep beats a clean house, every time.',
        ],
      },
      {
        heading: 'Sleep and recovery',
        items: [
          'Growth hormone, which repairs tissue, is released during deep sleep — making rest genuinely part of physical healing.',
          'Cortisol (stress hormone) rises sharply with sleep deprivation, which can slow wound healing and worsen mood.',
          'If you have had a C-section, being overtired can make pain perception worse.',
        ],
      },
      {
        heading: 'When tiredness is more than tiredness',
        type: 'warning',
        items: [
          'Persistent inability to sleep even when the baby is sleeping may indicate postpartum anxiety or depression.',
          'Extreme exhaustion accompanied by very low mood lasting more than 2 weeks — speak to your GP.',
          'If you feel unsafe or unable to care for yourself or your baby due to exhaustion, ask for urgent support.',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'At your 6-week check, be honest about how tired you are. Healthcare providers often underestimate postnatal sleep problems unless you name them directly.',
      },
    ],
  },
  {
    id: 'nutrition',
    title: 'Nutrition and hydration postpartum',
    category: 'Wellbeing',
    icon: ForkKnife,
    preview: 'What to eat to support healing, energy, and milk supply after birth.',
    sections: [
      {
        body: 'Your body has just done something extraordinary. What you eat in the weeks after birth affects wound healing, energy levels, mood, and — if breastfeeding — milk quality and supply.',
      },
      {
        heading: 'Calorie needs',
        items: [
          'Recovery alone increases caloric needs above your pre-pregnancy baseline.',
          'Breastfeeding requires an additional 400–500 calories per day.',
          'This is not the time to restrict food — undereating slows healing and worsens fatigue.',
        ],
      },
      {
        heading: 'Key nutrients to prioritise',
        items: [
          'Iron — rebuild what was lost in blood loss. Sources: red meat, lentils, spinach, fortified cereals. Pair with vitamin C to improve absorption.',
          'Protein — essential for tissue repair. Aim for 60–80g per day. Sources: eggs, fish, chicken, legumes, Greek yoghurt.',
          'Calcium — especially important if breastfeeding, as your body draws from bone stores. Sources: dairy, fortified plant milks, tinned fish with bones.',
          'Omega-3 (DHA) — supports mood and brain recovery. Sources: oily fish (salmon, sardines), walnuts, flaxseed.',
          'Vitamin D — most new mothers in the UK are deficient. Continue your pregnancy supplement or take 10mcg daily.',
        ],
      },
      {
        heading: 'Hydration',
        items: [
          'Aim for 2–3 litres of fluid per day, more if breastfeeding.',
          'Dehydration worsens constipation, headaches, and fatigue — all already common postpartum.',
          'Keep a water bottle wherever you feed the baby.',
        ],
      },
      {
        heading: 'Constipation (very common postpartum)',
        items: [
          'Common causes: pain medication (especially codeine), iron supplements, reduced mobility, and fear of straining near a wound.',
          'Prioritise fibre: oats, fruit, vegetables, wholegrains.',
          'Lactulose or Movicol are safe to take while breastfeeding — ask your midwife or GP.',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'Batch-cook before your due date if possible, or accept any offer of food from family and friends. Easy, high-protein snacks — boiled eggs, cheese, nuts, yoghurt — are far better than reaching for sugary foods when energy crashes.',
      },
    ],
  },
  {
    id: 'when-to-call',
    title: 'When to call your midwife or GP',
    category: 'Safety',
    icon: FirstAid,
    preview: 'Red flag symptoms that need prompt medical attention in the postpartum period.',
    sections: [
      {
        body: 'Most postpartum discomfort is normal. But some symptoms signal complications that need same-day or emergency care. Trust your instincts — if something feels wrong, act on it.',
      },
      {
        heading: 'Call 999 or go to A&E immediately',
        type: 'warning',
        items: [
          'Chest pain, difficulty breathing, or one-sided leg pain and swelling (possible blood clot)',
          'Heavy bleeding — soaking more than one pad per hour for 2+ hours',
          'Seizures or loss of consciousness',
          'Severe headache that is sudden-onset, unlike any previous headache',
          'Thoughts of harming yourself or your baby',
          'High fever (38.5°C+) with rapid deterioration — possible sepsis',
        ],
      },
      {
        heading: 'Contact your midwife or GP the same day',
        items: [
          'Fever above 38°C',
          'Wound that is red, hot, swollen, or leaking pus',
          'Painful, hard area in the breast with flu-like symptoms (mastitis)',
          'Lochia (vaginal discharge) that suddenly increases, smells offensive, or changes to bright red after it had slowed',
          'Difficulty passing urine, or burning pain when urinating',
          'Calf pain, redness, or swelling — especially if one-sided',
          'Persistent low mood, inability to cope, or feeling disconnected from reality',
        ],
      },
      {
        heading: 'It is always OK to call',
        items: [
          'Midwives and health visitors expect and welcome calls from new mothers.',
          'Never feel like you are wasting anyone\'s time — early concerns are much easier to manage than delayed ones.',
          'If you cannot reach your midwife, call NHS 111 or speak to your GP.',
        ],
      },
      {
        heading: 'Tip',
        type: 'tip',
        body: 'Save your midwife and community team numbers in your phone before birth so you have them ready. Most symptoms that turn out to be nothing are still worth a quick call to confirm.',
      },
    ],
  },
]


export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<Tab>('guides')
  const [search, setSearch] = useState('')
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)

  const filtered = ARTICLES.filter(
    a =>
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <h1 className="text-2xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}>
        Community
      </h1>

      {/* Tabs */}
      <div className="flex gap-2">
        {([
          { key: 'guides',    label: 'Guides' },
          { key: 'following', label: 'Following' },
          { key: 'for_you',   label: 'For You' },
        ] as { key: Tab; label: string }[]).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
            style={{
              background: activeTab === key ? 'var(--color-pm-primary)' : 'var(--color-pm-surface)',
              color: activeTab === key ? '#fff' : 'var(--color-pm-text-secondary)',
              border: `1.5px solid ${activeTab === key ? 'var(--color-pm-primary)' : 'var(--color-pm-border)'}`,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Following tab */}
      {activeTab === 'following' && (
        <div className="flex flex-col gap-3">
          {FOLLOWING_POSTS.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      )}

      {/* For You tab */}
      {activeTab === 'for_you' && (
        <div className="flex flex-col gap-3">
          {FOR_YOU_POSTS.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      )}

      {activeTab === 'guides' && <>

      {/* Search */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-2xl"
        style={{ background: 'var(--color-pm-surface)', border: '1.5px solid var(--color-pm-border)' }}
      >
        <MagnifyingGlass size={16} color="var(--color-pm-text-muted)" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search help topics…"
          className="flex-1 bg-transparent text-sm outline-none"
          style={{ color: 'var(--color-pm-text)' }}
        />
      </div>

      {/* Articles */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
          {search ? `Results for "${search}"` : 'Articles & Guides'}
        </p>
        <div className="flex flex-col gap-3">
          {filtered.map(article => {
            const Icon = article.icon
            const isExpanded = expandedArticle === article.id
            return (
              <Card
                key={article.id}
                style={{ padding: '0', overflow: 'hidden' }}
                onClick={() => setExpandedArticle(isExpanded ? null : article.id)}
              >
                <div className="flex items-center gap-3 p-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#E8F0DC' }}
                  >
                    <Icon size={18} weight="fill" color="var(--color-pm-primary)" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium" style={{ color: 'var(--color-pm-text-muted)' }}>
                      {article.category}
                    </p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--color-pm-text)' }}>
                      {article.title}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    color="var(--color-pm-text-muted)"
                    style={{ transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}
                  />
                </div>
                {isExpanded && (
                  <div
                    className="px-4 pb-4 flex flex-col gap-4"
                    style={{ borderTop: '1px solid var(--color-pm-border)' }}
                  >
                    {article.sections.map((section, si) => {
                      if (section.type === 'warning') {
                        return (
                          <div
                            key={si}
                            className="rounded-xl px-3 py-3 flex flex-col gap-2 mt-1"
                            style={{ background: '#F5ECD8', border: '1px solid #C4A87A40' }}
                          >
                            {section.heading && (
                              <p className="text-xs font-semibold" style={{ color: '#8C5A38' }}>
                                ⚠ {section.heading}
                              </p>
                            )}
                            {section.body && (
                              <p className="text-xs leading-relaxed" style={{ color: '#6B4F32' }}>{section.body}</p>
                            )}
                            {section.items?.map((item, ii) => (
                              <div key={ii} className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#8C5A38' }} />
                                <p className="text-xs leading-snug" style={{ color: '#6B4F32' }}>{item}</p>
                              </div>
                            ))}
                          </div>
                        )
                      }
                      if (section.type === 'tip') {
                        return (
                          <div
                            key={si}
                            className="rounded-xl px-3 py-3 flex flex-col gap-1.5 mt-1"
                            style={{ background: '#E8F0DC', border: '1px solid #AECA9540' }}
                          >
                            <p className="text-xs font-semibold" style={{ color: '#627356' }}>💡 {section.heading ?? 'Tip'}</p>
                            {section.body && (
                              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-pm-text-secondary)' }}>{section.body}</p>
                            )}
                          </div>
                        )
                      }
                      return (
                        <div key={si} className="flex flex-col gap-2 pt-2">
                          {section.heading && (
                            <p className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>
                              {section.heading}
                            </p>
                          )}
                          {section.body && (
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-pm-text-secondary)' }}>
                              {section.body}
                            </p>
                          )}
                          {section.items?.map((item, ii) => (
                            <div key={ii} className="flex items-start gap-2.5">
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: 'var(--color-pm-primary)' }}
                              />
                              <p className="text-xs leading-snug" style={{ color: 'var(--color-pm-text-secondary)' }}>{item}</p>
                            </div>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                )}
              </Card>
            )
          })}
          {filtered.length === 0 && (
            <Card>
              <p className="text-sm text-center py-4" style={{ color: 'var(--color-pm-text-muted)' }}>
                No results found for "{search}"
              </p>
            </Card>
          )}
        </div>
      </div>

      </>}
    </div>
  )
}
