const cards =
    [
        {
            "id": "mj0",
            "type": "major",
            "suit": null,
            "img": "0Fool",
            "name": "The Fool",
            "meaning": "Beginnings, innocence, spontaneity, free spirit",
            "meaning_rev": "Holding back, recklessness, risk-taking"
        },
        {
            "id": "mj1",
            "type": "major",
            "suit": null,
            "img": "1Magician",
            "name": "The Magician",
            "meaning": "Manifestation, resourcefulness, power, inspired action",
            "meaning_rev": "Manipulation, poor planning, untapped talents"
        },
        {
            "id": "mj2",
            "type": "major",
            "suit": null,
            "img": "2HighPriestess",
            "name": "The High Priestess",
            "meaning": "Intuition, subconscious, sacred knowledge, divine feminine",
            "meaning_rev": "Secrets, disconnected from intuition, withdrawal and silence"
        },
        {
            "id": "mj3",
            "type": "major",
            "suit": null,
            "img": "3Empress",
            "name": "The Empress",
            "meaning": "Femininity, beauty, nature, nurturing, abundance",
            "meaning_rev": "Creative block, dependence on others"
        },
        {
            "id": "mj4",
            "type": "major",
            "suit": null,
            "img": "4Emperor",
            "name": "The Emperor",
            "meaning": "Authority, structure, establishment, a father figure",
            "meaning_rev": "Domination, excessive control, lack of discipline"
        },
        {
            "id": "mj5",
            "type": "major",
            "suit": null,
            "img": "5Hierophant",
            "name": "The Hierophant",
            "meaning": "Spiritual wisdom, religious beliefs, conformity, tradition",
            "meaning_rev": "Personal beliefs, freedom, challenging the status quo"
        },
        {
            "id": "mj6",
            "type": "major",
            "suit": null,
            "img": "6Lovers",
            "name": "The Lovers",
            "meaning": "Love, harmony, relationships, values, alignment, choices",
            "meaning_rev": "Self-love, disharmony, imbalance, misalignment of value"
        },
        {
            "id": "mj7",
            "type": "major",
            "suit": null,
            "img": "7Chariot",
            "name": "The Chariot",
            "meaning": "Control, willpower, success, action, determination",
            "meaning_rev": "Self-discipline, opposition, lack of direction"
        },
        {
            "id": "mj8",
            "type": "major",
            "suit": null,
            "img": "8Strength",
            "name": "Strength",
            "meaning": "Strength, courage, persuasion, influence, compassion",
            "meaning_rev": "Inner strength, self-doubt, low energy, raw emotion"
        },
        {
            "id": "mj9",
            "type": "major",
            "suit": null,
            "img": "9Hermit",
            "name": "The Hermit",
            "meaning": "Soul-searching, introspection, inner guidance",
            "meaning_rev": "Isolation, loneliness, withdrawal"
        },
        {
            "id": "mj10",
            "type": "major",
            "suit": null,
            "img": "10Wheel",
            "name": "The Wheel Of Fortune",
            "meaning": "Good luck, karma, life cycles, destiny, a turning point",
            "meaning_rev": "Bad luck, resistance to change, breaking cycles"
        },
        {
            "id": "mj11",
            "type": "major",
            "suit": null,
            "img": "11Justice",
            "name": "Justice",
            "meaning": "Justice, fairness, truth, cause and effect, law",
            "meaning_rev": "Unfairness, lack of accountability, dishonesty"
        },
        {
            "id": "mj12",
            "type": "major",
            "suit": null,
            "img": "12Hanged",
            "name": "The Hanged Man",
            "meaning": "Pause, surrender, letting go, new perspective",
            "meaning_rev": "Delays, resistance, stalling, indecision"
        },
        {
            "id": "mj13",
            "type": "major",
            "suit": null,
            "img": "13Death",
            "name": "Death",
            "meaning": "Endings, change, transformation, transition",
            "meaning_rev": "Resistance to change, personal transformation"
        },
        {
            "id": "mj14",
            "type": "major",
            "suit": null,
            "img": "14Temperance",
            "name": "Temperance",
            "meaning": "Balance, moderation, patience, purpose",
            "meaning_rev": "Imbalance, excess, self-healing, re-alignment"
        },
        {
            "id": "mj15",
            "type": "major",
            "suit": null,
            "img": "15Devil",
            "name": "The Devil",
            "meaning": "Shadow self, restriction, attachment, addiction, sexuality",
            "meaning_rev": "Releasing limiting beliefs, exploring dark thoughts"
        },
        {
            "id": "mj16",
            "type": "major",
            "suit": null,
            "img": "16Tower",
            "name": "The Tower",
            "meaning": "Sudden change, upheaval, chaos, revelation, awakening",
            "meaning_rev": "Personal transformation, fear of change"
        },
        {
            "id": "mj17",
            "type": "major",
            "suit": null,
            "img": "17Star",
            "name": "The Star",
            "meaning": "Hope, faith, purpose, renewal, spirituality",
            "meaning_rev": "Lack of faith, despair, self-trust, disconnection"
        },
        {
            "id": "mj18",
            "type": "major",
            "suit": null,
            "img": "18Moon",
            "name": "The Moon",
            "meaning": "Illusion, fear, anxiety, subconscious, intuition",
            "meaning_rev": "Release of fear, repressed emotion, inner confusion"
        },
        {
            "id": "mj19",
            "type": "major",
            "suit": null,
            "img": "19Sun",
            "name": "The Sun",
            "meaning": "Positivity, fun, warmth, success, vitality",
            "meaning_rev": "Inner child, feeling down, overly optimistic"
        },
        {
            "id": "mj20",
            "type": "major",
            "suit": null,
            "img": "20Judgement",
            "name": "Judgement",
            "meaning": "Judgement, rebirth, inner calling, absolution",
            "meaning_rev": "Self-doubt, inner critic, ignoring the call"
        },
        {
            "id": "mj21",
            "type": "major",
            "suit": null,
            "img": "21World",
            "name": "The World",
            "meaning": "Completion, travel, accomplishment, integration",
            "meaning_rev": "Seeking personal closure, short-cuts, delays"
        },
        {
            "id": "w1",
            "type": "minor",
            "suit": "Wand",
            "img": "1Wand",
            "name": "Ace of Wands",
            "meaning": "Creation, willpower, inspiration, desire",
            "meaning_rev": "Lack of energy, lack of passion, boredom"
        },
        {
            "id": "w2",
            "type": "minor",
            "suit": "Wand",
            "img": "2Wand",
            "name": "Two of Wands",
            "meaning": "Making decisions, leaving home, planning",
            "meaning_rev": "Fear of change, playing safe, bad planning"
        },
        {
            "id": "w3",
            "type": "minor",
            "suit": "Wand",
            "img": "3Wand",
            "name": "Three of Wands",
            "meaning": "Looking ahead, growth, expansion",
            "meaning_rev": "Obstacles, delays, frustration"
        },
        {
            "id": "w4",
            "type": "minor",
            "suit": "Wand",
            "img": "4Wand",
            "name": "Four of Wands",
            "meaning": "Community, home, celebration",
            "meaning_rev": "Lack of support, home conflicts, transience"
        },
        {
            "id": "w5",
            "type": "minor",
            "suit": "Wand",
            "img": "5Wand",
            "name": "Five of Wands",
            "meaning": "Competition, conflict, disagreements",
            "meaning_rev": "Avoiding conflict, respecting differences"
        },
        {
            "id": "w6",
            "type": "minor",
            "suit": "Wand",
            "img": "6Wand",
            "name": "Six of Wands",
            "meaning": "Victory, success, public recognition",
            "meaning_rev": "Excess pride, lack of recognition"
        },
        {
            "id": "w7",
            "type": "minor",
            "suit": "Wand",
            "img": "7Wand",
            "name": "Seven of Wands",
            "meaning": "Perseverance, defense, maintaining control",
            "meaning_rev": "Giving up, lack of confidence, overwhelm"
        },
        {
            "id": "w8",
            "type": "minor",
            "suit": "Wand",
            "img": "8Wand",
            "name": "Eight of Wands",
            "meaning": "Change, movement, quick decisions",
            "meaning_rev": "Panic, waiting, slowing down"
        },
        {
            "id": "w9",
            "type": "minor",
            "suit": "Wand",
            "img": "9Wand",
            "name": "Nine of Wands",
            "meaning": "Resilience, grit, last stand",
            "meaning_rev": "Exhaustion, fatigue, unsure motives"
        },
        {
            "id": "w10",
            "type": "minor",
            "suit": "Wand",
            "img": "10Wand",
            "name": "Ten of Wands",
            "meaning": "Responsibility, burden",
            "meaning_rev": "Burnt out, stressed, unwilling to delegate"
        },
        {
            "id": "w11",
            "type": "minor",
            "suit": "Wand",
            "img": "11Wand",
            "name": "Page of Wands",
            "meaning": "Exploration, excitement, freedom",
            "meaning_rev": "Lack of direction, procrastination, conflict"
        },
        {
            "id": "w12",
            "type": "minor",
            "suit": "Wand",
            "img": "12Wand",
            "name": "Knight of Wands",
            "meaning": "Action, Adventure, fearlessness",
            "meaning_rev": "Anger, impulsiveness, recklessness"
        },
        {
            "id": "w13",
            "type": "minor",
            "suit": "Wand",
            "img": "13Wand",
            "name": "Queen of Wands",
            "meaning": "Courage, determination, passion, joy",
            "meaning_rev": "Selfishness, insecurity, jealousy"
        },
        {
            "id": "w14",
            "type": "minor",
            "suit": "Wand",
            "img": "14Wand",
            "name": "King of Wands",
            "meaning": "Big picture, leader, overcoming challenges",
            "meaning_rev": "Impulsive, overbearing, impossible expectations"
        },
        {
            "id": "c1",
            "type": "minor",
            "suit": "Cup",
            "img": "1Cup",
            "name": "Ace of Cups",
            "meaning": "Love, new relationships, compassion, creatively",
            "meaning_rev": "Self-love, intuition, repressed emotions"
        },
        {
            "id": "c2",
            "type": "minor",
            "suit": "Cup",
            "img": "2Cup",
            "name": "Two of Cups",
            "meaning": "Unified love, partnership, mutual attraction",
            "meaning_rev": "Self-love, break-ups, disharmony, distrust"
        },
        {
            "id": "c3",
            "type": "minor",
            "suit": "Cup",
            "img": "3Cup",
            "name": "Three of Cups",
            "meaning": "Celebration, friendship, creativity, collaborations",
            "meaning_rev": "Independence, alone time, overindulgence"
        },
        {
            "id": "c4",
            "type": "minor",
            "suit": "Cup",
            "img": "4Cup",
            "name": "Four of Cups",
            "meaning": "Apathy, contemplation, disconnection",
            "meaning_rev": "Retreat, withdrawal, checking in for alignments"
        },
        {
            "id": "c5",
            "type": "minor",
            "suit": "Cup",
            "img": "5Cup",
            "name": "Five of Cups",
            "meaning": "Loss, grief, mourning, disappointment, regret",
            "meaning_rev": "Acceptance, moving on, finding peace"
        },
        {
            "id": "c6",
            "type": "minor",
            "suit": "Cup",
            "img": "6Cup",
            "name": "Six of Cups",
            "meaning": "Nostalgia, childhood memories, innocence",
            "meaning_rev": "Leaving home, moving forward, independence"
        },
        {
            "id": "c7",
            "type": "minor",
            "suit": "Cup",
            "img": "7Cup",
            "name": "Seven of Cups",
            "meaning": "Searching for purpose, choices, illusion",
            "meaning_rev": "Diversion, disarray, lack of purpose"
        },
        {
            "id": "c8",
            "type": "minor",
            "suit": "Cup",
            "img": "8Cup",
            "name": "Eight of Cups",
            "meaning": "Walking away, leaving something behind",
            "meaning_rev": "Avoidance, fear of change, fear of loss"
        },
        {
            "id": "c9",
            "type": "minor",
            "suit": "Cup",
            "img": "9Cup",
            "name": "Nine of Cups",
            "meaning": "Satisfaction, luxury, emotional stability",
            "meaning_rev": "Lack of true joy, dissatisfaction"
        },
        {
            "id": "c10",
            "type": "minor",
            "suit": "Cup",
            "img": "10Cup",
            "name": "Ten of Cups",
            "meaning": "Inner happiness, dream come true, fulfillment",
            "meaning_rev": "Shattered dreams, broken family, disputes"
        },
        {
            "id": "c11",
            "type": "minor",
            "suit": "Cup",
            "img": "11Cup",
            "name": "Page of Cups",
            "meaning": "Happy surprise, dreamer, sensitivity",
            "meaning_rev": "Emotional immaturity, insecurity, disappointment"
        },
        {
            "id": "c12",
            "type": "minor",
            "suit": "Cup",
            "img": "12Cup",
            "name": "Knight of Cups",
            "meaning": "Idealistic, romantic, following one's heart",
            "meaning_rev": "Fickleness, moodiness, fantasy"
        },
        {
            "id": "c13",
            "type": "minor",
            "suit": "Cup",
            "img": "13Cup",
            "name": "Queen of Cups",
            "meaning": "Compassion, calm, comfort",
            "meaning_rev": "Martyrdom, insecurity, dependence"
        },
        {
            "id": "c14",
            "type": "minor",
            "suit": "Cup",
            "img": "14Cup",
            "name": "King of Cups",
            "meaning": "Emotional control, balance",
            "meaning_rev": "Coldness, moodiness, emotional manipulation"
        },
        {
            "id": "s1",
            "type": "minor",
            "suit": "Sword",
            "img": "1Sword",
            "name": "Ace of Swords",
            "meaning": "Breakthroughs, success, new ideas, mental clarity",
            "meaning_rev": "Inner clarity, re-thinking an idea, clouded judgement"
        },
        {
            "id": "s2",
            "type": "minor",
            "suit": "Sword",
            "img": "2Sword",
            "name": "Two of Swords",
            "meaning": "Tough decisions, impasse, weighing options, avoiding",
            "meaning_rev": "Indecision, confusion, information overload"
        },
        {
            "id": "s3",
            "type": "minor",
            "suit": "Sword",
            "img": "3Sword",
            "name": "Three of Swords",
            "meaning": "Heartbreak, emotional pain, sorrow, grief, hurt",
            "meaning_rev": "Negative self-talk, releasing pain, optimism, forgiveness"
        },
        {
            "id": "s4",
            "type": "minor",
            "suit": "Sword",
            "img": "4Sword",
            "name": "Four of Swords",
            "meaning": "Rest, relaxation, meditation, contemplation, recuperation",
            "meaning_rev": "Exhaustion, burn-out, deep contemplation"
        },
        {
            "id": "s5",
            "type": "minor",
            "suit": "Sword",
            "img": "5Sword",
            "name": "Five of Swords",
            "meaning": "Conflict, disagreements, defeat, winning at all costs",
            "meaning_rev": "Reconciliation, making amends, past resentment"
        },
        {
            "id": "s6",
            "type": "minor",
            "suit": "Sword",
            "img": "6Sword",
            "name": "Six of Swords",
            "meaning": "Transition, change, rite of passage, release",
            "meaning_rev": "Personal transition, resistance to change"
        },
        {
            "id": "s7",
            "type": "minor",
            "suit": "Sword",
            "img": "7Sword",
            "name": "Seven of Swords",
            "meaning": "Betrayal, deception, getting away with it, strategy",
            "meaning_rev": "Imposter syndrome, self-deceit, keeping secrets"
        },
        {
            "id": "s8",
            "type": "minor",
            "suit": "Sword",
            "img": "8Sword",
            "name": "Eight of Swords",
            "meaning": "Self-imposed restriction, victim mentality",
            "meaning_rev": "Self-limiting beliefs, inner critic, new perspective"
        },
        {
            "id": "s9",
            "type": "minor",
            "suit": "Sword",
            "img": "9Sword",
            "name": "Nine of Swords",
            "meaning": "Anxiety, worry, fear, depression, nightmares",
            "meaning_rev": "Inner turmoil, deep-seated fears, secrets, release worry"
        },
        {
            "id": "s10",
            "type": "minor",
            "suit": "Sword",
            "img": "10Sword",
            "name": "Ten of Swords",
            "meaning": "Painful endings, deep wounds, betrayal, loss",
            "meaning_rev": "Recovery, regeneration, resisting an inevitable end"
        },
        {
            "id": "s11",
            "type": "minor",
            "suit": "Sword",
            "img": "11Sword",
            "name": "Page of Swords",
            "meaning": "New ideas, curiosity, thirst for knowledge",
            "meaning_rev": "Self-expression, all talk and no action, haste"
        },
        {
            "id": "s12",
            "type": "minor",
            "suit": "Sword",
            "img": "12Sword",
            "name": "Knight of Swords",
            "meaning": "Ambitious, action-oriented, fast-thinking",
            "meaning_rev": "Restless, unfocused, impulsive, burn-out"
        },
        {
            "id": "s13",
            "type": "minor",
            "suit": "Sword",
            "img": "13Sword",
            "name": "Queen of Swords",
            "meaning": "Unbiased judgement, clear boundaries, direct",
            "meaning_rev": "Overly emotional, easily influenced, cold-hearted"
        },
        {
            "id": "s14",
            "type": "minor",
            "suit": "Sword",
            "img": "14Sword",
            "name": "King of Swords",
            "meaning": "Mental clarity, intellectual power, authority, truth",
            "meaning_rev": "Quiet power, inner truth, misuse of power"
        },
        {
            "id": "p1",
            "type": "minor",
            "suit": "Pent",
            "img": "1Pent",
            "name": "Ace of Pentacles",
            "meaning": "New financial opportunity, manifestation, abundance",
            "meaning_rev": "Lost opportunity, lack of planning/foresight"
        },
        {
            "id": "p2",
            "type": "minor",
            "suit": "Pent",
            "img": "2Pent",
            "name": "Two of Pentacles",
            "meaning": "Many priorities, adapting, time management",
            "meaning_rev": "Over-committed, disorganization"
        },
        {
            "id": "p3",
            "type": "minor",
            "suit": "Pent",
            "img": "3Pent",
            "name": "Three of Pentacles",
            "meaning": "Teamwork, implementation, collaboration, learning",
            "meaning_rev": "Disharmony, working alone, misalignment"
        },
        {
            "id": "p4",
            "type": "minor",
            "suit": "Pent",
            "img": "4Pent",
            "name": "Four of Pentacles",
            "meaning": "Saving money, control, security, conservatism",
            "meaning_rev": "Overspending, green, self-protection"
        },
        {
            "id": "p5",
            "type": "minor",
            "suit": "Pent",
            "img": "5Pent",
            "name": "Five of Pentacles",
            "meaning": "Poverty, lacking mindset, isolation, worry",
            "meaning_rev": "Recovery from financial loss, spiritual poverty"
        },
        {
            "id": "p6",
            "type": "minor",
            "suit": "Pent",
            "img": "6Pent",
            "name": "Six of Pentacles",
            "meaning": "Giving, receiving, sharing wealth, generosity",
            "meaning_rev": "Self-care, unpaid debts, one-sided charity"
        },
        {
            "id": "p7",
            "type": "minor",
            "suit": "Pent",
            "img": "7Pent",
            "name": "Seven of Pentacles",
            "meaning": "Long-term view, perseverance, investment",
            "meaning_rev": "Lack of long-term vision, limited success"
        },
        {
            "id": "p8",
            "type": "minor",
            "suit": "Pent",
            "img": "8Pent",
            "name": "Eight of Pentacles",
            "meaning": "Apprenticeship, repetitive tasks, skill development",
            "meaning_rev": "Perfectionism, misdirected activity"
        },
        {
            "id": "p9",
            "type": "minor",
            "suit": "Pent",
            "img": "9Pent",
            "name": "Nine of Pentacles",
            "meaning": "Luxury, self-sufficiency, financial independence",
            "meaning_rev": "Self-worth, hustling, over-investment in work"
        },
        {
            "id": "p10",
            "type": "minor",
            "suit": "Pent",
            "img": "10Pent",
            "name": "Ten of Pentacles",
            "meaning": "Wealth, legacy, financial security, long-term success",
            "meaning_rev": "The dark side of wealth, financial failure or loss"
        },
        {
            "id": "p11",
            "type": "minor",
            "suit": "Pent",
            "img": "11Pent",
            "name": "Page of Pentacles",
            "meaning": "Manifestation financial opportunity, development",
            "meaning_rev": "Lack of progress, procrastination"
        },
        {
            "id": "p12",
            "type": "minor",
            "suit": "Pent",
            "img": "12Pent",
            "name": "Knight of Pentacles",
            "meaning": "Hard work, productivity, routine, conservatism",
            "meaning_rev": "Self-discipline, perfectionism, boredom, feeling stuck"
        },
        {
            "id": "p13",
            "type": "minor",
            "suit": "Pent",
            "img": "13Pent",
            "name": "Queen of Pentacles",
            "meaning": "Nurturing, practical, providing financially",
            "meaning_rev": "Financial independence, self-care, work-home conflict"
        },
        {
            "id": "p14",
            "type": "minor",
            "suit": "Pent",
            "img": "14Pent",
            "name": "King of Pentacles",
            "meaning": "Wealth, business, discipline, leadership, abundance",
            "meaning_rev": "Financially inept, stubborn, obsessed with wealth"
        }
    ]

export default cards;