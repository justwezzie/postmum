export interface WeeklyUpdate {
  week: number
  title: string
  summary: string
  commonExperiences: string[]
  watchFor: string[]
  tip: {
    heading: string
    body: string
    product?: {
      name: string
      why: string
    }
  }
}

export const WEEKLY_UPDATES: WeeklyUpdate[] = [
  {
    week: 1,
    title: 'The Fourth Trimester Begins',
    summary: 'Your body has just done something extraordinary. This week is entirely about rest, bleeding management, and skin-to-skin with your baby.',
    commonExperiences: [
      'Heavy bleeding (lochia) — bright red, similar to a heavy period',
      'Afterpains as your uterus contracts back',
      'Perineal soreness or incision tenderness',
      'Night sweats as your body sheds pregnancy fluid',
      'Emotional highs and lows — completely normal',
    ],
    watchFor: [
      'Soaking more than one pad per hour — call your midwife',
      'Fever above 38°C / 100.4°F',
    ],
    tip: {
      heading: 'Ice packs are your best friend',
      body: 'Wrap a frozen pad or gel pack in a cloth and apply for 10–15 minutes every few hours. Reduces swelling and numbs soreness around the perineum or incision site significantly.',
    },
  },
  {
    week: 2,
    title: 'Rest Is Recovery',
    summary: 'Bleeding shifts from red to pink or brown. Energy is still very low — your body is directing everything inward to heal. Resist the urge to do more.',
    commonExperiences: [
      'Lochia turning pink or brownish',
      'Breast engorgement as milk comes in (days 3–5)',
      'Latching challenges if breastfeeding',
      'Emotional sensitivity — crying without knowing why is common',
      'Constipation from pain meds and reduced movement',
    ],
    watchFor: [
      'Engorgement that doesn\'t ease with feeding — may indicate blocked duct',
      'Feeling persistently hopeless or detached from your baby',
    ],
    tip: {
      heading: 'Boost gut health early',
      body: 'Constipation after birth is extremely common and very uncomfortable. A daily probiotic alongside plenty of water and fibre can make a real difference within days.',
      product: {
        name: 'Lactobacillus-based probiotic (e.g. Culturelle or Bio-Kult)',
        why: 'Antibiotics during birth disrupt gut flora. Lactobacillus strains specifically help restore balance and ease constipation without stimulant laxatives that can cause cramping.',
      },
    },
  },
  {
    week: 3,
    title: 'Baby Blues Peak',
    summary: 'Weeks 3–4 are when baby blues tend to peak as oestrogen and progesterone drop sharply. You may feel tearful, overwhelmed, or irritable — this is hormonal, not a reflection of your ability.',
    commonExperiences: [
      'Crying spells that feel disproportionate',
      'Feeling touched out or needing space',
      'Sleep deprivation hitting harder',
      'Appetite returning — your body needs fuel',
      'Lochia becoming lighter or yellowish-white',
    ],
    watchFor: [
      'Low mood lasting more than two weeks — this may be postpartum depression, and support is available',
      'Intrusive thoughts that feel distressing or persistent',
    ],
    tip: {
      heading: 'Your body odour has changed — here\'s why',
      body: 'Many women notice their sweat smells different postpartum. This is real: hormonal shifts change your microbiome and sweat composition. Conventional antiperspirants block pores with aluminium compounds, which can cause irritation on already-sensitive skin. A natural deodorant that neutralises odour without blocking sweat works better for most postpartum bodies.',
      product: {
        name: 'Natural deodorant (e.g. Native, Schmidt\'s, or Wild)',
        why: 'These use baking soda or magnesium to neutralise odour-causing bacteria rather than blocking sweat glands. Safer if you\'re breastfeeding (less chemical absorption near lymph nodes), gentler on hormonally sensitive skin, and just as effective for most people once your body adjusts over 1–2 weeks.',
      },
    },
  },
  {
    week: 4,
    title: 'Finding a Rhythm',
    summary: 'Most physical wounds are healing well. You may start to feel slightly more human — but don\'t let that fool you into overdoing it. Emotional recovery often lags behind physical.',
    commonExperiences: [
      'Energy starting to return in small pockets',
      'Hair shedding beginning (telogen effluvium — very common, temporary)',
      'Sex drive still low — entirely normal',
      'Feeding becoming more predictable',
      'Incision or perineal area feeling itchy as nerves regenerate',
    ],
    watchFor: [
      'Hair loss that feels extreme — mention it at your 6-week check-up',
      'Wound edges reopening or discharge from incision site',
    ],
    tip: {
      heading: 'Your scalp needs support right now',
      body: 'Postpartum hair shedding can be alarming. It\'s caused by the sudden drop in oestrogen (which was keeping hair in a prolonged growth phase during pregnancy). You can\'t stop it, but you can support regrowth.',
      product: {
        name: 'Biotin + zinc supplement or a postpartum hair care formula',
        why: 'Zinc deficiency is extremely common postpartum (especially if breastfeeding) and directly impacts hair follicle function. Biotin supports keratin production. Neither will stop the shed, but both support the regrowth phase that follows.',
      },
    },
  },
  {
    week: 5,
    title: 'Emotional Waves',
    summary: 'Physical healing is well underway, but emotions can intensify as the newness fades and the reality of this new life sets in. Bonding looks different for everyone — there\'s no right timeline.',
    commonExperiences: [
      'Identity shift — grieving your pre-baby self is normal',
      'Relationship dynamics changing with partner',
      'Breastfeeding supply regulating',
      'More awareness of what your body looks like now',
      'Moments of deep joy alongside deep exhaustion',
    ],
    watchFor: [
      'Persistent anxiety or intrusive thoughts — speak to your GP',
      'Complete loss of appetite or inability to sleep even when baby sleeps',
    ],
    tip: {
      heading: 'Nourish your skin from the outside in',
      body: 'Skin is often dry, dull, or marked with stretch marks postpartum. Your skin barrier is weakened by hormonal changes and potential nutritional depletion from feeding.',
      product: {
        name: 'Body oil with rosehip or vitamin E (e.g. Bio-Oil, Trilogy Rosehip)',
        why: 'Rosehip oil is rich in trans-retinoic acid and essential fatty acids that support skin regeneration. Safe to use while breastfeeding unlike retinol creams, and clinically shown to improve the appearance of scars and stretch marks when used consistently.',
      },
    },
  },
  {
    week: 6,
    title: 'Your 6-Week Check-Up',
    summary: 'This is a significant milestone. Your 6-week appointment checks wound healing, pelvic floor, mental health, and gives you the go-ahead for exercise and sex. Come prepared with questions.',
    commonExperiences: [
      'Clearance for light exercise — start gently',
      'Contraception conversation with your GP',
      'Continued emotional adjusting',
      'Possible return of periods for non-breastfeeding mothers',
    ],
    watchFor: [
      'Feeling dismissed at your check-up — advocate for yourself',
      'Pelvic floor symptoms like leaking or heaviness — ask for a physio referral',
    ],
    tip: {
      heading: 'Take a summary to your appointment',
      body: 'Use your symptom log in postmum to print or screenshot a summary of your past 6 weeks. GPs have 10 minutes — having your symptoms organised means you\'re more likely to get the referrals and support you actually need.',
    },
  },
  {
    week: 7,
    title: 'Rebuilding Gently',
    summary: 'If you\'ve been cleared for exercise, begin with walking and pelvic floor work before anything high-impact. Your connective tissue and joints are still lax from relaxin for months after birth.',
    commonExperiences: [
      'Joints feeling looser or unstable, especially hips and pelvis',
      'Core feeling disconnected or weak',
      'Libido slowly returning for some',
      'Baby becoming more interactive — smiles, sounds',
    ],
    watchFor: [
      'Pain during sex when it resumes — not something to push through, speak to your GP',
      'Any heaviness or bulging in the pelvic area — possible prolapse, very treatable',
    ],
    tip: {
      heading: 'Start pelvic floor physio now, not later',
      body: 'Pelvic floor dysfunction affects around 1 in 3 women who have given birth and most never seek help. A single appointment with a women\'s health physio can identify issues early before they become chronic.',
      product: {
        name: 'Pelvic floor physio referral or a biofeedback device (e.g. Elvie Trainer)',
        why: 'Many women do pelvic floor exercises incorrectly without feedback. Biofeedback devices show you whether you\'re contracting the right muscles and at the right strength — making the exercises significantly more effective.',
      },
    },
  },
  {
    week: 8,
    title: 'The Long Game',
    summary: 'Recovery is not linear. Some days feel like progress, others like regression. Both are normal. Your mental and emotional recovery often takes longer than physical, and that\'s expected.',
    commonExperiences: [
      'Energy becoming more consistent',
      'Sleep still fragmented but more manageable',
      'Sense of identity starting to integrate (mother and self)',
      'Physical activity slowly building',
    ],
    watchFor: [
      'Ongoing low mood, anxiety, or rage — postpartum mood disorders can emerge any time in the first year',
      'Exhaustion that doesn\'t improve with rest — check iron levels',
    ],
    tip: {
      heading: 'Check your iron levels',
      body: 'Iron deficiency is the most common nutritional deficiency postpartum, especially after blood loss in birth. It causes profound fatigue, low mood, poor concentration, and hair loss — all often attributed to "just being a new mum." A simple blood test can confirm it.',
      product: {
        name: 'Liquid iron supplement (e.g. Floradix, Spatone)',
        why: 'Liquid iron formulas have significantly higher absorption rates than tablet forms and cause far less constipation — a major issue with standard ferrous sulfate tablets. Take with vitamin C to double absorption.',
      },
    },
  },
]

export function getWeeklyUpdate(week: number | null): WeeklyUpdate | null {
  if (!week) return null
  // Return exact week if available, otherwise return the last one
  return WEEKLY_UPDATES.find(u => u.week === week)
    ?? (week > WEEKLY_UPDATES[WEEKLY_UPDATES.length - 1].week
      ? WEEKLY_UPDATES[WEEKLY_UPDATES.length - 1]
      : null)
}
