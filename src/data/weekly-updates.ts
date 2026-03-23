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
  {
    week: 9,
    title: 'Two Months In',
    summary: 'You\'ve navigated two full months. Your baby is more alert and responsive, which can feel rewarding — but sleep deprivation is still very real. Give yourself credit for how much you\'ve adapted.',
    commonExperiences: [
      'Baby sleeping in longer stretches at night (2–4 hours)',
      'More social smiling and eye contact from baby',
      'Your own sleep debt accumulating — fatigue feels bone-deep',
      'Milk supply stabilising if breastfeeding',
      'Possible return of periods if not breastfeeding',
    ],
    watchFor: [
      'Persistent rage or irritability alongside low mood — can be a sign of postpartum depression or anxiety',
      'Isolation growing — make contact with at least one person outside the home daily',
    ],
    tip: {
      heading: 'Prioritise sleep over everything else',
      body: 'Sleep deprivation at this stage can mimic and worsen depression and anxiety. "Sleep when the baby sleeps" is frustrating advice when the list is endless — but protecting even one long sleep block per 24 hours makes a measurable difference to mood and cognition.',
    },
  },
  {
    week: 10,
    title: 'Your Relationship Is Under Pressure',
    summary: 'The strain on partnership relationships typically peaks around weeks 10–12. Division of labour, emotional support, and intimacy all shift dramatically with a new baby. This is normal — and navigable.',
    commonExperiences: [
      'Feeling unsupported or unseen by your partner',
      'Resentment about unequal load — common and valid',
      'Difficulty communicating when exhausted',
      'Partner feeling shut out or helpless',
      'Intimacy changes — physical and emotional',
    ],
    watchFor: [
      'Conflict escalating beyond disagreements to contempt or stonewalling — consider couples support',
      'Feeling completely alone in the parenting role',
    ],
    tip: {
      heading: 'Specify, don\'t hint',
      body: 'Asking for help in vague terms ("I need more support") rarely works when both people are exhausted. Specific requests ("Can you take the 5am feed on Saturday so I can sleep until 8?") are more likely to be understood and acted on. It shouldn\'t fall to you — but in this season, specificity gets results faster than expectation.',
    },
  },
  {
    week: 11,
    title: 'Movement as Medicine',
    summary: 'Gentle movement — not exercise as punishment — can significantly lift mood, improve sleep quality, and reduce anxiety. Focus on how it feels, not how you look.',
    commonExperiences: [
      'Physical energy returning enough for short walks',
      'Body shape still different to pre-pregnancy — and may stay that way',
      'Core and glute weakness noticeable in daily movement',
      'Lingering aches from feeding postures',
    ],
    watchFor: [
      'Leaking urine during activity — do not push through, see a pelvic floor physio',
      'Lower back pain that\'s worsening rather than improving',
    ],
    tip: {
      heading: 'Posture is the hidden cause of most postpartum pain',
      body: 'Hours of feeding, carrying, and leaning over a cot create predictable postural problems: rounded shoulders, tight chest, weak upper back. A simple daily chest stretch and shoulder roll routine takes 3 minutes and makes a real difference.',
      product: {
        name: 'Posture support bra or a supportive nursing bra with structured back',
        why: 'Unsupported breast tissue during breastfeeding significantly increases upper back and neck strain. A well-fitted nursing bra with back support reduces this mechanical load over the many hours per day spent feeding.',
      },
    },
  },
  {
    week: 12,
    title: 'Three Months: A Real Milestone',
    summary: 'Three months marks the end of the "fourth trimester." Your baby is more predictable, you\'re more confident, and the acute survival phase is giving way to something that feels more like living.',
    commonExperiences: [
      'More consistent daytime nap patterns emerging',
      'Increased confidence in reading your baby\'s cues',
      'Some breastfeeding mothers beginning to plateau or dip in supply',
      'Hair shedding often peaking around now',
      'More capacity for self-care thoughts, if not always action',
    ],
    watchFor: [
      'Supply dropping significantly — assess hydration, nutrition, and frequency of feeds',
      'Anxiety increasing rather than decreasing as baby becomes more active',
    ],
    tip: {
      heading: 'Rebuild your social self',
      body: 'Isolation is one of the biggest risk factors for postpartum depression. This is a good week to book something with another adult — a mother\'s group, a walk with a friend, even a phone call you keep putting off. Connection is not a luxury.',
    },
  },
  {
    week: 13,
    title: 'The Fog Begins to Lift',
    summary: 'For many mothers, around 3 months a subtle shift occurs — a little more clarity, a little more capacity. This isn\'t universal, but if you\'re feeling it, lean into it.',
    commonExperiences: [
      'Baby sleeping 4–6 hour stretches in some cases',
      '"Baby brain" beginning to ease slightly',
      'More enjoyment of baby interactions',
      'Return-to-work thoughts if applicable',
      'Body weight plateau — change in body composition still ongoing',
    ],
    watchFor: [
      'Feeling dread about returning to work — worth processing now, not the week before',
      'Ongoing difficulty bonding with baby at 3+ months — speak to your midwife or GP',
    ],
    tip: {
      heading: 'Omega-3s support your brain, not just baby\'s',
      body: 'The cognitive effects of postpartum — forgetfulness, difficulty concentrating, emotional blunting — have a neurological basis. DHA (an omega-3 fatty acid) is heavily depleted during pregnancy as your body prioritises baby\'s brain development.',
      product: {
        name: 'Postnatal DHA supplement (e.g. Nordic Naturals Postnatal Omega-3)',
        why: 'DHA supports neural membrane integrity, which affects mood regulation and cognitive clarity. Postnatal formulas include DHA alongside vitamin D — which most breastfeeding mothers are also deficient in. Safe and beneficial for the duration of breastfeeding.',
      },
    },
  },
  {
    week: 14,
    title: 'Feeding Decisions and Pressure',
    summary: 'Whether you\'re still breastfeeding, have switched to formula, or are combination feeding — the external commentary never fully stops. Your feeding decision is yours, and all paths lead to a nourished baby.',
    commonExperiences: [
      'Breastfeeding supply more established or beginning to wean',
      'Formula feeding becoming more routine if chosen',
      'Judgement from others (or yourself) about feeding choices',
      'Feeding becoming faster and less effortful overall',
    ],
    watchFor: [
      'Thrush on nipples — white patches, shooting pain — treatable with antifungal',
      'Mastitis: hot, red, wedge-shaped area with flu-like symptoms — needs prompt treatment',
    ],
    tip: {
      heading: 'Let go of the "perfect" feeding journey',
      body: 'Research consistently shows that fed babies thrive. The mental health cost of struggling through a feeding method that isn\'t working is real and measurable. If you\'re in pain or deeply unhappy with your current approach, permission to change it.',
    },
  },
  {
    week: 15,
    title: 'Rebuilding Your Core',
    summary: 'If you\'ve been working with a physio or gradually building movement, this is a good time to focus specifically on core reconnection. Your abdominal muscles separated during pregnancy and need deliberate rehabilitation.',
    commonExperiences: [
      'Feeling "softer" in the midsection than expected — healing takes time',
      'Diastasis recti (abdominal separation) still present in many women',
      'Improved stamina on walks',
      'Some women returning to yoga or Pilates',
    ],
    watchFor: [
      'Coning or doming at your midline during exercises — sign of unclosed diastasis, avoid high-load core work',
      'Lower back pain increasing with new exercise — reduce intensity and see a physio',
    ],
    tip: {
      heading: 'Check for diastasis recti before loading your core',
      body: 'Diastasis recti affects up to 60% of women postpartum. Doing standard crunches or sit-ups before it closes can widen the gap further. A 5-second self-check or physio assessment takes minutes and protects your long-term core function.',
      product: {
        name: 'Postpartum core rehabilitation programme (e.g. Every Mother, MumSafe certified instructors)',
        why: 'Generic fitness apps don\'t account for postpartum anatomy. Programmes specifically designed for diastasis recti and pelvic floor recovery use a progression that heals from the inside out rather than loading the abdomen prematurely.',
      },
    },
  },
  {
    week: 16,
    title: 'Four Months: Sleep Regression Incoming',
    summary: 'The 4-month sleep regression is biologically driven — baby\'s sleep cycles are maturing. A baby who was sleeping well may suddenly wake more frequently. This is development, not disaster.',
    commonExperiences: [
      'Baby waking 2–4 times per night after longer stretches',
      'Increased fussiness during the day',
      'Feeding more frequently (growth spurts align)',
      'Your own exhaustion spiking again',
      'Doubting everything you thought was working',
    ],
    watchFor: [
      'Using formula top-ups or early solids as desperation sleep fixes — they rarely work and may introduce new problems',
      'Your mental health deteriorating rapidly with renewed sleep deprivation',
    ],
    tip: {
      heading: 'This regression ends — here\'s how to survive it',
      body: 'The 4-month regression typically lasts 2–6 weeks. You cannot sleep-train through it as it\'s neurological. Focus on safe sleep, responsive settling, and preserving your own sleep windows wherever possible. Partner involvement at night matters most right now.',
    },
  },
  {
    week: 17,
    title: 'Your Identity Beyond Motherhood',
    summary: 'Matrescence — the psychological transformation of becoming a mother — is as significant as adolescence. You\'re allowed to miss who you were and still love who you\'re becoming.',
    commonExperiences: [
      'Craving activities or interests from before baby',
      'Feeling guilty for wanting time alone',
      'Difficulty remembering what you enjoyed before',
      'Gradually finding new ways to feel like yourself',
    ],
    watchFor: [
      'Complete loss of sense of self or purpose — worth discussing with a therapist',
      'Feeling trapped or resentful of the baby (not just the role) — seek non-judgemental support',
    ],
    tip: {
      heading: 'Schedule something that is entirely yours',
      body: 'Even one hour per week doing something you chose — not for your baby, your partner, or your household — has measurable effects on maternal wellbeing. It doesn\'t have to be elaborate. A walk alone with headphones, a coffee, a hobby you\'ve abandoned. Reclaim something.',
    },
  },
  {
    week: 18,
    title: 'Thinking About Starting Solids',
    summary: 'The NHS and WHO recommend introducing solid foods around 6 months, but preparation can start earlier. Signs of readiness (not age alone) include sitting with support, lost tongue-thrust reflex, and interest in food.',
    commonExperiences: [
      'Baby watching you eat with intense interest',
      'Increased drooling and mouthing of objects',
      'Possibly longer wake windows and shorter naps consolidating',
      'Returning appetite for variety in your own diet',
    ],
    watchFor: [
      'Starting solids before 17 weeks — gut lining isn\'t ready and allergy risk increases',
      'Expecting solids to "fill baby up" and improve sleep — evidence doesn\'t support this',
    ],
    tip: {
      heading: 'Your nutrition matters more during weaning than you think',
      body: 'What you eat shapes baby\'s flavour preferences through breast milk. Introducing a wide variety of flavours now — vegetables, spices, variety — increases the likelihood of a less fussy eater later.',
    },
  },
  {
    week: 19,
    title: 'Thyroid and Hormones',
    summary: 'Postpartum thyroiditis affects around 5–10% of women and is frequently missed or misattributed to "normal" tiredness. It typically causes an overactive phase followed by underactive symptoms in the first year.',
    commonExperiences: [
      'Unexplained fatigue that is disproportionate',
      'Weight changes that don\'t reflect diet or exercise',
      'Heart palpitations, anxiety, or feeling unusually cold',
      'Mood instability without clear cause',
    ],
    watchFor: [
      'Any combination of extreme fatigue, hair loss, weight gain, and depression — request a thyroid panel from your GP',
      'Palpitations or trembling — may indicate hyperthyroid phase',
    ],
    tip: {
      heading: 'Ask for a full thyroid panel at your next blood test',
      body: 'A standard blood test only checks TSH. Ask specifically for TSH, free T3, and free T4. Postpartum thyroiditis is autoimmune-driven, often temporary, and highly treatable — but many women go 6–12 months undiagnosed because symptoms overlap with normal new-parent exhaustion.',
    },
  },
  {
    week: 20,
    title: 'Five Months: Body Recomposition',
    summary: 'Five months postpartum, many women\'s bodies are still changing — not necessarily in weight, but in composition. Muscle is rebuilding, fat distribution shifting, and skin adapting. This is a slow process by design.',
    commonExperiences: [
      'Clothes fitting differently even if weight is similar to pre-pregnancy',
      'Waist, hips, and rib cage measurements potentially changed permanently',
      'Increased physical stamina',
      'Clearer skin for some; persistent hormonal breakouts for others',
    ],
    watchFor: [
      'Restricting food significantly to "bounce back" — nutritional needs are high, especially if breastfeeding',
      'Over-exercising to compensate — can suppress milk supply and increase cortisol',
    ],
    tip: {
      heading: 'Your body may never return to exactly what it was — and that\'s not failure',
      body: 'Rib cage expansion, hip widening, and changes in fat distribution can be permanent. Many women find their body settles into a new normal that is different but strong. Reframing from "getting your body back" to "building into your body" changes the experience significantly.',
    },
  },
  {
    week: 21,
    title: 'Sleep Training: When and How',
    summary: 'If you\'re considering sleep training, around 4–6 months is when most methods are considered appropriate. There is no single "right" method — choose one that matches your values and you can follow consistently.',
    commonExperiences: [
      'More predictable nap windows forming',
      'Baby capable of longer stretches without feeding at night',
      'Conflicting advice from every direction about sleep',
      'Exhaustion making the decision feel urgent',
    ],
    watchFor: [
      'Starting any sleep training before 4 months — neurologically premature',
      'Choosing a method you can\'t emotionally maintain — inconsistency is the main reason methods fail',
    ],
    tip: {
      heading: 'Consistency matters more than the method',
      body: 'Research shows that multiple evidence-based sleep training approaches produce similar outcomes. What predicts success is consistent, calm application over 1–2 weeks. Decide on a method, align with your partner, and commit to it for two weeks before evaluating.',
    },
  },
  {
    week: 22,
    title: 'Skin Changes Postpartum',
    summary: 'Hormonal fluctuations throughout the first year affect everything from pigmentation to oil production. Many skin changes are temporary, but knowing what\'s happening helps.',
    commonExperiences: [
      'Melasma (darkened patches, especially on face) — worsens with sun exposure',
      'Hormonal acne along jawline and chin',
      'Skin feeling drier or more sensitive than before',
      'Stretch marks fading from red/purple to silver',
    ],
    watchFor: [
      'Melasma that is very dark or spreading — SPF is essential, topical treatments after breastfeeding',
      'Acne that is cystic or worsening — may need GP review',
    ],
    tip: {
      heading: 'SPF is the single most effective skincare step right now',
      body: 'Postpartum hormones make skin significantly more susceptible to hyperpigmentation. Daily SPF 30–50 prevents melasma from darkening and protects any fading that\'s already happened. It\'s the highest-value skincare investment at this stage.',
      product: {
        name: 'Tinted mineral SPF (e.g. Altruist SPF50, La Roche-Posay Tinted Mineral)',
        why: 'Mineral SPF (zinc oxide/titanium dioxide) is safer during breastfeeding than chemical filters and less irritating on sensitive postpartum skin. The tint evens skin tone while protecting it — replacing foundation for daily wear.',
      },
    },
  },
  {
    week: 23,
    title: 'The Weaning Conversation',
    summary: 'If you\'re breastfeeding, the question of when and how to wean is one you\'ll navigate on your own timeline. There\'s no universal right time — only what works for you and your baby.',
    commonExperiences: [
      'Societal pressure to wean (or to continue)',
      'Baby showing more or less interest in feeds',
      'Natural drop in overnight feeds if sleeping longer',
      'Your own ambivalence about stopping',
    ],
    watchFor: [
      'Dysphoric Milk Ejection Reflex (D-MER) — a sudden wave of negative emotion at let-down. Not psychological; it\'s a neurochemical response that is real and increasingly recognised',
      'Mastitis when dropping feeds too quickly — always reduce gradually',
    ],
    tip: {
      heading: 'Drop feeds slowly to protect your physical and emotional health',
      body: 'Weaning too quickly causes engorgement, blocked ducts, and mastitis — and the hormonal drop can trigger or worsen depression. Drop one feed every 5–7 days minimum, starting with the least important feed to you both.',
    },
  },
  {
    week: 24,
    title: 'Six Months: Halfway Through the First Year',
    summary: 'Six months is a significant marker. Your baby is a fully interactive human with preferences and personality. You\'ve kept a person alive and growing through one of the most physically demanding years of your life. That\'s extraordinary.',
    commonExperiences: [
      'Baby sitting with support, reaching for objects',
      'Solid food introduction beginning',
      'Night waking possibly reducing as sleep matures',
      'Return of periods for many women, even while breastfeeding',
      'Mix of pride and disbelief at how far you\'ve both come',
    ],
    watchFor: [
      'Return of heavy, painful periods — PCOS or endometriosis can resurface postpartum',
      'Feeling low specifically around period return — hormonal shifts are significant',
    ],
    tip: {
      heading: 'Return of your period is a hormonal reset — expect mood changes',
      body: 'When periods return, the hormonal fluctuations of a cycle recommence on top of already shifted postpartum hormones. PMDD (premenstrual dysphoric disorder) can emerge for the first time postpartum. Track your cycle from the first return so you can identify patterns.',
    },
  },
  {
    week: 25,
    title: 'Return to Work Planning',
    summary: 'For many, the return to work is approaching. The practical logistics are manageable — the emotional complexity is what often catches people off guard. Plan for both.',
    commonExperiences: [
      'Anxiety about leaving baby with carer',
      'Financial pressure to return sooner than desired',
      'Mixed feelings: relief, guilt, and anticipation',
      'Practical concerns about pumping, feeding schedules, handovers',
    ],
    watchFor: [
      'Dread so severe it\'s affecting sleep or functioning — speak to someone before you return',
      'Pressure to return earlier than your body or mind are ready',
    ],
    tip: {
      heading: 'Do a "practice run" before your official return',
      body: 'If possible, visit the childcare setting several times with your baby before the actual start date. Familiarity reduces separation anxiety for both of you. Leave for 30 minutes, return calm. Build up. It makes the real day significantly less overwhelming.',
    },
  },
  {
    week: 26,
    title: 'Nutrition at the Halfway Mark',
    summary: 'Your nutritional needs remain elevated whether you\'re breastfeeding or not. Recovery from birth, hormonal regulation, and high physical demand all require intentional fuelling.',
    commonExperiences: [
      'Appetite returning to or above pre-pregnancy levels',
      'Cravings for specific foods — often signalling deficiencies',
      'Less time to cook or prepare meals than before',
      'Energy inconsistent throughout the day',
    ],
    watchFor: [
      'Fatigue with normal iron levels — consider B12, folate, and vitamin D',
      'Craving ice or non-food items (pica) — can indicate severe iron deficiency',
    ],
    tip: {
      heading: 'Protein is the most underconsumed nutrient postpartum',
      body: 'Muscle repair, hormone production, milk synthesis, and immune function all depend on adequate protein. Most postpartum women significantly undereat protein. Aim for at least 1.2–1.6g per kg of body weight daily. Eggs, Greek yoghurt, and legumes are fast, high-protein options.',
      product: {
        name: 'Postnatal multivitamin with iodine (e.g. Wild Nutrition Postnatal, Bare Biology)',
        why: 'Postnatal formulas include iodine — critical for baby\'s thyroid development via breast milk and often absent from standard prenatal vitamins. They also typically include higher vitamin D and B12 than regular supplements.',
      },
    },
  },
  {
    week: 27,
    title: 'Seven Months: Mobility Begins',
    summary: 'Your baby is likely rolling confidently and may be commando crawling or pulling to sit. The physical demands on you shift — more bending, lifting, chasing — which means new areas of strain.',
    commonExperiences: [
      'Increased back and wrist strain from lifting a heavier baby',
      'Sleep possibly improving as night feeds reduce',
      'Solid food routines becoming more established',
      'Baby expressing preferences, frustration, and delight more clearly',
    ],
    watchFor: [
      'De Quervain\'s tenosynovitis — wrist and thumb pain from repetitive lifting — extremely common postpartum, very treatable',
      'Persistent lower back pain from awkward lifting postures',
    ],
    tip: {
      heading: 'Lift from your legs, not your back',
      body: 'You\'ll lift your baby hundreds of times per day. Using your legs rather than rounding through your back makes a compounding difference to lower back health over weeks and months. Consciously squat to pick up rather than bending from the waist — it becomes habit quickly.',
      product: {
        name: 'Wrist support brace (e.g. Futuro Wrist Stabiliser)',
        why: 'De Quervain\'s affects a large proportion of new parents and is directly caused by the twisting motion of lifting under baby\'s arms. A simple wrist brace worn during peak lifting hours reduces tendon strain and allows the inflammation to resolve without complete rest.',
      },
    },
  },
  {
    week: 28,
    title: 'Postpartum Anxiety: The Less-Talked-About Condition',
    summary: 'Postpartum anxiety is as common as postpartum depression, but receives far less attention. Constant worry, hypervigilance, intrusive "what if" thoughts, and difficulty relaxing are hallmark signs.',
    commonExperiences: [
      'Checking on baby repeatedly during sleep',
      'Difficulty switching off even when baby is fine',
      'Catastrophic thinking about unlikely scenarios',
      'Physical symptoms: racing heart, tight chest, difficulty breathing',
    ],
    watchFor: [
      'Anxiety interfering with sleep, eating, or daily functioning',
      'Intrusive, horrifying thoughts about harm coming to baby — these are ego-dystonic and common, but deserve support',
    ],
    tip: {
      heading: 'Anxiety is not the same as good parenting',
      body: 'Vigilance and anxiety are not the same thing. Anxiety is a dysregulated nervous system response — it doesn\'t make you a more attentive parent, it exhausts you. Effective treatment (therapy, medication, both) doesn\'t reduce your love or care. It makes you more present.',
    },
  },
  {
    week: 29,
    title: 'Teeth and Sleep Disruption',
    summary: 'Teething typically begins 6–10 months, with the first lower teeth arriving first. It disrupts sleep and mood — for both of you.',
    commonExperiences: [
      'Excessive drooling and gnawing on everything',
      'Night waking increasing temporarily',
      'Swollen, red gum patches',
      'Fussiness and clinginess',
    ],
    watchFor: [
      'Fever above 38°C attributed to teething — teething doesn\'t cause high fever, investigate another cause',
      'Loss of interest in food when first teeth arrive — temporary but worth monitoring',
    ],
    tip: {
      heading: 'Manage teething pain consistently, not reactively',
      body: 'Chilled (not frozen) teething rings offer reliable gum counter-pressure. Paracetamol or ibuprofen (if over 3 months) at bedtime during active eruption can help everyone sleep. Teething gels with benzocaine are no longer recommended in children under 2.',
    },
  },
  {
    week: 30,
    title: 'Fitness Beyond Weight Loss',
    summary: 'Seven to eight months postpartum, many women begin approaching fitness from a different angle — not to lose weight, but to feel strong, capable, and energised. That mindset shift makes exercise sustainable.',
    commonExperiences: [
      'Increasing capacity for structured exercise',
      'Possible return to running (with pelvic floor clearance)',
      'Core function noticeably improving',
      'More energy for movement than at any previous point',
    ],
    watchFor: [
      'Returning to high-impact exercise without pelvic floor assessment — leaking, heaviness, or prolapse symptoms are a stop sign',
      'Using exercise to compensate emotionally — watch for compulsive patterns',
    ],
    tip: {
      heading: 'Running is not the first return-to-sport milestone — it\'s the last',
      body: 'Running is high-impact and requires significant pelvic floor capacity. The Return to Running guidelines suggest walking 30 minutes without symptoms, single leg balance, and walking lunges before attempting any running — regardless of how "fit" you were before.',
    },
  },
  {
    week: 31,
    title: 'Eight Months: Separation Anxiety Peaks',
    summary: 'Around 8–10 months, object permanence develops fully — and with it, separation anxiety. Your baby understands you exist when gone, and protests accordingly. This is neurological development, not spoiling.',
    commonExperiences: [
      'Intense crying when you leave the room',
      'Baby only settling with you, not partner or carer',
      'Sleep regressions linked to developmental leaps',
      'Your own emotional response to baby\'s distress',
    ],
    watchFor: [
      'Caregiver distress at the intensity of separation reactions — this phase is finite, usually resolving by 12–18 months',
      'Your own anxiety escalating in response to baby\'s anxiety — they co-regulate from you',
    ],
    tip: {
      heading: 'Short, predictable goodbyes reduce anxiety more than prolonged ones',
      body: 'Sneaking away to avoid tears backfires — baby learns transitions are unpredictable and unsafe. A brief, calm, consistent goodbye ritual (a phrase, a wave, a kiss) teaches that separation is safe and returns happen. Keep it to 30 seconds and leave without looking back.',
    },
  },
  {
    week: 32,
    title: 'Postpartum Hair Regrowth',
    summary: 'If you experienced significant hair shedding at 3–5 months, new growth is likely appearing now — the fine, shorter hairs around your hairline. Recovery is underway, though it takes 6–12 months to fully normalise.',
    commonExperiences: [
      'Short, fuzzy regrowth visible at temples and hairline',
      'Halo of flyaway hairs that won\'t lie flat',
      'Volume slowly returning in ponytails',
      'Some women\'s hair growing in with different texture temporarily',
    ],
    watchFor: [
      'No regrowth visible by 9 months — check thyroid and ferritin levels',
      'Continued heavy shedding beyond 6 months — nutritional or thyroid investigation warranted',
    ],
    tip: {
      heading: 'Support regrowth without damaging what\'s growing',
      body: 'New regrowth is fragile. Tight ponytails, excessive heat, and chemical treatments damage the new hairs before they reach length. Scalp massage increases local blood flow and has modest evidence for stimulating follicle activity — 4 minutes daily is enough.',
      product: {
        name: 'Scalp serum with peptides or caffeine (e.g. Ordinary Multi-Peptide Serum)',
        why: 'Caffeine and peptide-based serums have the strongest cosmetic evidence for supporting hair density during regrowth. Apply directly to scalp, not lengths. Pairs well with daily scalp massage.',
      },
    },
  },
  {
    week: 33,
    title: 'Processing Your Birth Story',
    summary: 'Birth trauma — whether from a complicated delivery, an unexpected intervention, or simply a birth that felt out of your control — deserves attention. Many women don\'t process it until months later.',
    commonExperiences: [
      'Intrusive memories or flashbacks to difficult moments in labour',
      'Avoidance of conversations about birth or pregnancy',
      'Anxiety about future pregnancies',
      'Feeling detached from or angry about your birth experience',
    ],
    watchFor: [
      'Symptoms of PTSD: nightmares, hypervigilance, emotional numbing, avoidance — these respond well to treatment',
      'Birth trauma being dismissed by health professionals — it is real and valid regardless of outcome',
    ],
    tip: {
      heading: 'A birth debrief can help close the loop',
      body: 'Many NHS trusts offer birth debrief services — a meeting with a midwife to go through your notes and understand what happened and why. For many women, simply having the timeline explained removes the confusion or self-blame that trauma can cause.',
    },
  },
  {
    week: 34,
    title: 'Gut Health and Mood',
    summary: 'The gut-brain axis — the bidirectional communication between digestive system and brain — is increasingly understood to affect mood, anxiety, and energy. Postpartum gut health is often neglected.',
    commonExperiences: [
      'Digestive function returning to normal for most',
      'Bloating or irregularity related to dietary shifts',
      'Possible IBS flare if susceptible — stress and hormones are triggers',
    ],
    watchFor: [
      'Persistent bloating, alternating constipation and diarrhoea — may warrant investigation',
      'Low mood that worsens after poor eating — a potential gut-brain signal',
    ],
    tip: {
      heading: 'Diverse fibre feeds the microbiome that influences your mood',
      body: 'The gut produces around 90% of the body\'s serotonin. A diverse, fibre-rich diet (30+ different plant foods per week) feeds a healthy microbiome and supports neurotransmitter production. It doesn\'t require perfection — it requires variety.',
      product: {
        name: 'Prebiotic fibre supplement (e.g. Symprove, Kefir, or Inulin powder)',
        why: 'Prebiotics feed beneficial gut bacteria selectively. Adding a daily prebiotic source — especially if diet variety is limited — supports the microbiome changes that have measurable effects on mood and immune function.',
      },
    },
  },
  {
    week: 35,
    title: 'Nine Months: You\'ve Been a Mother as Long as You Were Pregnant',
    summary: 'This is a milestone worth marking. Nine months pregnant, nine months a mother. The person who went into that labour ward and the person you are today are related — but not identical.',
    commonExperiences: [
      'Deep familiarity with your baby\'s rhythms, preferences, and personality',
      'A sense of competence that wasn\'t there at the beginning',
      'Grief for parts of your pre-baby identity',
      'Pride you may not be allowing yourself to feel fully',
    ],
    watchFor: [
      'Cumulative burnout — nine months of high-demand caregiving without adequate support catches up',
      'Feeling that you\'re "not doing enough" despite doing everything — worth examining with a therapist',
    ],
    tip: {
      heading: 'Let yourself feel proud',
      body: 'Maternal competence — learning to read a completely dependent human, keeping them safe, nourishing them, regulating them — is a sophisticated skill set built under extreme conditions. The tendency to minimise this ("any mum would do this") is worth resisting. You\'ve earned the acknowledgement.',
    },
  },
  {
    week: 36,
    title: 'Pelvic Floor: Long-Term Health',
    summary: 'Pelvic floor recovery is a marathon, not a sprint. Many women still have measurable dysfunction at 12 months that goes unaddressed because symptoms seem manageable. It\'s worth a check-in.',
    commonExperiences: [
      'Occasional leaking with exercise, sneezing, or coughing',
      'Urgency — not always making it to the toilet in time',
      'Pelvic heaviness by end of day',
      'Pain with deep penetration during sex',
    ],
    watchFor: [
      'Symptoms getting worse rather than gradually improving',
      'Avoiding exercise due to leaking — the leaking needs treating, not the activity',
    ],
    tip: {
      heading: 'Kegels alone are not enough for most women',
      body: 'Pelvic floor rehabilitation is a skill, not just a repetitive exercise. Many women have a hypertonic (too tight) pelvic floor, for whom Kegels make things worse. A women\'s health physiotherapist can assess whether your pelvic floor needs strengthening, relaxing, or coordination work — often all three.',
    },
  },
  {
    week: 37,
    title: 'Intimacy and Reconnection',
    summary: 'Physical and emotional intimacy looks different in this season. Many couples find themselves functioning as co-parents before partners. Reconnection takes intention, not just opportunity.',
    commonExperiences: [
      'Sex resuming for most couples by this stage, though frequency varies widely',
      'Pain with penetration for some — still normal, and treatable',
      'Emotional intimacy harder to prioritise than physical',
      'Libido still lower than pre-pregnancy for many',
    ],
    watchFor: [
      'Vaginal dryness causing pain — estrogen-containing vaginal cream prescribed by GP is highly effective and safe with breastfeeding',
      'Complete shutdown of emotional or physical connection — worth couples support',
    ],
    tip: {
      heading: 'Reconnection doesn\'t start in the bedroom',
      body: 'Emotional intimacy is a prerequisite for physical intimacy for most women. 10 minutes of conversation that isn\'t about logistics, childcare, or household management is more valuable to most relationships right now than scheduling sex. Start there.',
    },
  },
  {
    week: 38,
    title: 'Towards Independent Eating',
    summary: 'By 9–10 months, many babies are eating three small meals plus milk feeds. Food variety and texture progression matter more than quantity at this stage.',
    commonExperiences: [
      'Baby developing clear food preferences and dislikes',
      'Mealtime mess becoming a significant daily reality',
      'Breastmilk or formula still the primary nutritional source',
      'Iron-rich foods becoming especially important',
    ],
    watchFor: [
      'Refusing all lumpy textures after 10 months — may indicate sensory processing issues worth raising with HV',
      'Gagging vs choking — know the difference and stay calm during gagging',
    ],
    tip: {
      heading: 'Iron is the most important nutrient in the weaning diet',
      body: 'Babies are born with iron stores that deplete by around 6 months. Breast milk and formula both provide minimal iron by this stage. Red meat, dark poultry, lentils, and iron-fortified cereals at least twice daily are essential to prevent deficiency, which affects brain development.',
    },
  },
  {
    week: 39,
    title: 'Ten Months: Standing and Cruising',
    summary: 'Most babies pull to standing and "cruise" along furniture around 9–11 months. Walking is close. The house needs baby-proofing if it isn\'t already, and you need more energy than ever.',
    commonExperiences: [
      'Significantly more physical energy required to keep up',
      'Falls and bumps becoming daily occurrences',
      'Baby sleeping pattern changing again with mobility development',
      'Your fitness becoming a practical necessity',
    ],
    watchFor: [
      'No weight-bearing on legs by 12 months — flag to health visitor',
      'Your own exhaustion reaching new heights — seek support before burnout',
    ],
    tip: {
      heading: 'Your cardiovascular fitness now has a functional purpose',
      body: 'Chasing a cruising baby is low-level cardio all day. Building your aerobic base now — even through brisk walks — means you have the stamina for the increasingly active months ahead. Fitness as infrastructure, not aesthetics.',
    },
  },
  {
    week: 40,
    title: 'Hormonal Rebalancing in the Second Half',
    summary: 'In the second half of the first year, many women notice a gradual hormonal rebalancing — particularly for those not breastfeeding. Energy, libido, and mood often improve as oestrogen recovers.',
    commonExperiences: [
      'Periods regulating if they\'ve returned',
      'Skin and hair improving as oestrogen recovers',
      'Improved emotional baseline for some',
      'PMS potentially intensifying temporarily as cycles re-establish',
    ],
    watchFor: [
      'PMDD symptoms (severe mood changes in the week before period) — these are treatable',
      'Periods that are extremely heavy or painful — could indicate endometriosis or fibroids',
    ],
    tip: {
      heading: 'Track your cycle from the first return',
      body: 'The return of your cycle is a window into your hormonal recovery. Tracking luteal phase length, PMS severity, and cycle length over 3–4 months gives you and your GP actionable information about whether your hormones are rebalancing normally.',
      product: {
        name: 'Cycle tracking app (e.g. Natural Cycles, Clue, Flo)',
        why: 'Paper tracking misses patterns that apps identify over time. The combination of physical symptoms, mood, and cycle data gives a clear hormonal picture that can support conversations with your GP about anything from PMDD to contraception.',
      },
    },
  },
  {
    week: 41,
    title: 'The Motherhood Penalty',
    summary: 'Returning to work often reveals the structural costs of motherhood on career, income, and professional identity. The mental load doesn\'t reduce when work recommences — it compounds.',
    commonExperiences: [
      'Managing work performance with sleep deprivation',
      'Guilt about the childcare arrangement',
      'Noticing colleagues have progressed during leave',
      'Mental load becoming more visible when work is added',
    ],
    watchFor: [
      'Workplace discrimination or pressure related to motherhood — know your rights',
      'The return to work worsening anxiety or depression significantly',
    ],
    tip: {
      heading: 'The mental load is real — and it\'s measurable',
      body: 'Research shows working mothers perform more cognitive labour (planning, anticipating, coordinating) than working fathers in dual-income households. Naming and externalising the invisible tasks — using shared apps, explicit agreements — reduces the accumulation on one person.',
    },
  },
  {
    week: 42,
    title: 'Eleven Months: Almost Walking',
    summary: 'First steps are close. Many babies take independent steps between 10–14 months. This milestone is exciting and brings a new set of practical demands on you.',
    commonExperiences: [
      'Increased falls, bruises, and minor bumps',
      'Enormous pride in developmental progress',
      'Clinging to you more as they navigate new physical independence',
      'Sleep possibly disrupted again with this developmental leap',
    ],
    watchFor: [
      'Asymmetrical crawling or walking — one side favoured significantly — mention to health visitor',
      'Your own anxiety about injury becoming intrusive',
    ],
    tip: {
      heading: 'Falls at this age are developmental, not neglect',
      body: 'Babies learning to walk fall frequently — this is normal and necessary for learning balance. Your role is to create a safe environment (sharp corners padded, stairs gated) rather than prevent every fall. Excessive restriction slows motor skill development.',
    },
  },
  {
    week: 43,
    title: 'Preparing Emotionally for the First Birthday',
    summary: 'The first birthday is more emotionally complex for mothers than expected. It marks your own anniversary — one year of transformation, survival, adaptation, and growth.',
    commonExperiences: [
      'Nostalgia for newborn stage even alongside relief it\'s passed',
      'Grief for how quickly it\'s gone',
      'Pressure to celebrate "correctly"',
      'Reflection on how much you\'ve changed',
    ],
    watchFor: [
      'Low mood surrounding the birthday — anniversary reactions are common and real',
      'Feeling the year wasn\'t good enough — comparing to an idealised version of early motherhood',
    ],
    tip: {
      heading: 'The birthday is yours too',
      body: 'The first birthday marks one year of your baby\'s life and one year of your transformation into a mother. Consider marking it for yourself — a letter to your past self, a moment of acknowledgement. You carried this year. That deserves recognition.',
    },
  },
  {
    week: 44,
    title: 'Nutrition Review at Nearly One Year',
    summary: 'As your baby approaches a year, the feeding dynamic shifts substantially — from primarily milk-based to primarily food-based. Your own nutritional needs are also evolving.',
    commonExperiences: [
      'Baby eating most family foods in adapted forms',
      'Breastfeeding dropping to a few feeds per day for many',
      'Your own appetite shifting as feeding demands change',
      'Energy more stable than in previous months',
    ],
    watchFor: [
      'Baby still refusing all solid food at 11 months — seek HV support',
      'Your own nutritional intake reducing as baby demands less from you',
    ],
    tip: {
      heading: 'Vitamin D is non-negotiable, year-round',
      body: 'Vitamin D deficiency is endemic in UK adults and has measurable effects on mood, immune function, and bone health. The NHS recommends 10 micrograms daily for all adults year-round. If you stopped taking a postnatal supplement, vitamin D should be the one you continue.',
    },
  },
  {
    week: 45,
    title: 'Building Friendships in Motherhood',
    summary: 'The friendships formed in the first year of motherhood can be uniquely sustaining — formed under shared pressure with extraordinary intimacy. But not all pre-baby friendships survive unchanged.',
    commonExperiences: [
      'Some pre-baby friendships feeling harder to maintain',
      'New connections with other mothers feeling surprisingly deep',
      'Loneliness even within social connection',
      'Less capacity for relationships that require performance',
    ],
    watchFor: [
      'Chronic loneliness persisting — it is a health risk equivalent to smoking and warrants active attention',
      'Withdrawing from all social contact — a possible depression signal',
    ],
    tip: {
      heading: 'Low-barrier social connection is better than none',
      body: 'Friendship with small children requires accepting imperfection: cancelled plans, distracted conversations, messiness. The standard to aim for is regular, low-pressure contact — not meaningful, uninterrupted conversations. Those come back later. Show up imperfectly now.',
    },
  },
  {
    week: 46,
    title: 'Your Relationship With Your Own Mother',
    summary: 'Becoming a mother often transforms your relationship with your own mother — for better, worse, or both. Old patterns surface. New understanding emerges. This is normal and worth reflecting on.',
    commonExperiences: [
      'Empathy for what your own mother went through',
      'Awareness of parenting patterns you want to replicate or break',
      'Possible conflict with your mother over parenting approaches',
      'Grief if your mother is absent or your relationship is difficult',
    ],
    watchFor: [
      'Intergenerational trauma patterns emerging in your parenting — recognising them is the first step to interrupting them',
      'Processing grief (for a deceased mother) in the first year — seek support if it\'s resurfacing',
    ],
    tip: {
      heading: 'You can break a cycle without condemning the past',
      body: 'Doing things differently than your parents doesn\'t require making them villains. Most parents did what they knew with what they had. You have more information, more resources, and more support. Using them isn\'t betrayal — it\'s growth.',
    },
  },
  {
    week: 47,
    title: 'Sleep at Nearly One Year',
    summary: 'Most babies sleep 10–12 hours at night with 1–2 naps by 12 months. If yours isn\'t there yet, it\'s still within normal range — and strategies exist for most situations.',
    commonExperiences: [
      'Night weaning possible for most babies at this age',
      'Two naps consolidating to one for some babies early',
      'Early morning waking becoming a new challenge',
      'Your own sleep debt recovering as nights lengthen',
    ],
    watchFor: [
      'Snoring, mouth breathing, or gasping in sleep — may indicate sleep-disordered breathing worth assessing',
      'Your own inability to sleep even when baby sleeps — possible anxiety or conditioned hyperarousal',
    ],
    tip: {
      heading: 'Your own sleep hygiene matters as much as baby\'s routine',
      body: 'After a year of fragmented sleep, your circadian rhythm may have significantly shifted. Consistent wake time (even on weekends), morning light exposure, and limiting screens before bed help restore your natural sleep architecture more effectively than sleep aids.',
    },
  },
  {
    week: 48,
    title: 'The Body You Live In Now',
    summary: 'Twelve months on, many women are still navigating a complex relationship with their postpartum body. The cultural pressure to "return" to a pre-baby body is at odds with the biological reality of what birth does.',
    commonExperiences: [
      'Body composition still different to pre-pregnancy for most',
      'Some women finding their body stronger and more capable than before',
      'Others still struggling with how they look or feel',
      'Clothing that fits differently but life functioning at high capacity',
    ],
    watchFor: [
      'Disordered eating patterns re-emerging or emerging for the first time — postpartum is a risk period',
      'Exercise compulsion or restriction as body image coping — worth professional support',
    ],
    tip: {
      heading: 'Function is a more honest lens than aesthetics',
      body: 'A body that grew a human, birthed it, healed, produced milk, and carried a baby through a year of development has done extraordinary things. Measuring it only by how it looks misses the point. Functional markers — what you can do, how you move, how much energy you have — tell a truer story.',
    },
  },
  {
    week: 49,
    title: 'Long-Term Mental Health',
    summary: 'Postpartum mood disorders don\'t always resolve after the "postpartum period." Depression and anxiety that began in the first year can persist and require ongoing support. This is not weakness — it\'s biology.',
    commonExperiences: [
      'Most postpartum depression resolves with treatment within 6–12 months',
      'Some women discovering underlying anxiety or depression that predated pregnancy',
      'Better mental health than the early months for most',
      'New sources of stress (childcare costs, relationship strain, work) replacing early ones',
    ],
    watchFor: [
      'Untreated anxiety or depression at nearly one year — please seek support, effective treatment exists',
      'Feeling "fine" but disconnected, flat, or running on empty — subthreshold depression is still depression',
    ],
    tip: {
      heading: 'Therapy after a hard first year is not a last resort',
      body: 'Processing a difficult first year — whether traumatic birth, PND, relationship strain, or simply the profound change — with a therapist can prevent these experiences from calcifying into long-term patterns. You don\'t need to be in crisis to benefit from support.',
    },
  },
  {
    week: 50,
    title: 'Planning for the Next Chapter',
    summary: 'Whether the next chapter is another pregnancy, returning to full-time work, or simply enjoying a settled rhythm — this is a good time to consider what you actually want, not just what comes next by default.',
    commonExperiences: [
      'Thinking about whether to have more children (and when)',
      'Career and identity questions becoming louder',
      'Relationships stabilising or needing active work',
      'A tentative sense of new normal',
    ],
    watchFor: [
      'Making major decisions (career, family, relationship) from a place of depletion rather than clarity — try to wait until you\'re more rested',
      'Defaulting to others\' timelines for "what comes next"',
    ],
    tip: {
      heading: 'What do you actually want?',
      body: 'A year of putting another person\'s needs first can erode your sense of your own preferences. Taking time to ask — not "what should I do next?" but "what do I actually want?" — and sitting with the answer rather than immediately acting on it, is a form of self-recovery worth investing in.',
    },
  },
  {
    week: 51,
    title: 'The Village You\'ve Built',
    summary: 'Reflect on who has shown up for you this year. The village — partner, family, friends, professional support — is the most important predictor of maternal wellbeing. Who is in yours?',
    commonExperiences: [
      'Clarity about who supported you and who didn\'t',
      'Gratitude alongside possible grief for support that wasn\'t there',
      'A clearer sense of what you need from people going forward',
      'New relationships formed under the pressure of this year',
    ],
    watchFor: [
      'Persistent isolation with no reliable support network — this is a risk that needs actively addressing',
      'Resentment about unequal support that hasn\'t been addressed — it accumulates',
    ],
    tip: {
      heading: 'Tell the people who showed up that they mattered',
      body: 'People who turned up — who brought food, who held the baby so you could sleep, who called when you were struggling — often don\'t know how significant they were. Telling them doesn\'t just feel good; it reinforces the connection and builds the reciprocal relationships that sustain families long-term.',
    },
  },
  {
    week: 52,
    title: 'One Year: You Did It',
    summary: 'One full year. You navigated the most demanding physical, hormonal, relational, and psychological transition of adult life — and you\'re still here, still growing, still going. That is not small.',
    commonExperiences: [
      'A mix of relief, pride, nostalgia, and readiness for what\'s next',
      'Looking back at week 1 with a perspective that wasn\'t possible then',
      'Your baby: walking or nearly, communicating, a full personality',
      'A version of yourself that is harder, wiser, and more capable than you knew',
    ],
    watchFor: [
      'Depression or anxiety that persisted through the year — please seek support now if you haven\'t',
      'Physical symptoms that have been dismissed or tolerated — one year is a good moment to advocate for proper assessment',
    ],
    tip: {
      heading: 'The fourth trimester ends; the transformation doesn\'t',
      body: 'Matrescence — the becoming of a mother — continues beyond the first year. You will keep changing, keep integrating, keep discovering what motherhood means for you specifically. The hardest part is behind you. What\'s ahead is built on what you\'ve learned.',
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
