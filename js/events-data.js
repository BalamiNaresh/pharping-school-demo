// Pharping Secondary School – Events data (edit here to add/update events)

const EVENT_CATEGORIES = [
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    description: 'Athletic meets, tournaments, and physical education activities.',
  },
  {
    id: 'cultural',
    name: 'Cultural',
    icon: '🎭',
    description: 'Dance, music, drama, and traditional Nepali cultural programs.',
  },
  {
    id: 'academic',
    name: 'Academic',
    icon: '📚',
    description: 'Science fairs, quizzes, seminars, and academic competitions.',
  },
  {
    id: 'community',
    name: 'Community',
    icon: '🤝',
    description: 'Outreach, awareness campaigns, and community service events.',
  },
  {
    id: 'graduation',
    name: 'Graduation',
    icon: '🎓',
    description: 'SEE results, farewell ceremonies, and milestone celebrations.',
  },
];

const EVENTS = [
  // Sports
  {
    id: 'sports-day-2081',
    categoryId: 'sports',
    title: 'Annual Sports Day 2081',
    image: '../images/prospectus/image32.jpeg',
    date: '2081 Poush 15',
    location: 'School Ground',
    description:
      'Students from all grades participated in track and field events, football, volleyball, and traditional games. House teams competed for the championship trophy with outstanding spirit and sportsmanship.',
  },
  {
    id: 'inter-house-football',
    categoryId: 'sports',
    title: 'Inter-House Football Tournament',
    image: 'https://placehold.co/800x500/2563eb/ffffff?text=Football',
    date: '2081 Kartik 8–12',
    location: 'School Ground',
    description:
      'Four house teams battled through knockout rounds in a week-long football tournament. The final match drew a large crowd of students, teachers, and parents cheering from the sidelines.',
  },
  {
    id: 'basketball-championship',
    categoryId: 'sports',
    title: 'Basketball Championship',
    image: 'https://placehold.co/800x500/123569/ffffff?text=Basketball',
    date: '2081 Bhadra 20',
    location: 'School Court',
    description:
      'Senior students competed in an intense basketball championship. Skills developed during PE classes were on full display as teams demonstrated teamwork and athletic excellence.',
  },
  // Cultural
  {
    id: 'dashain-cultural',
    categoryId: 'cultural',
    title: 'Dashain Cultural Program',
    image: 'https://placehold.co/800x500/f59e0b/ffffff?text=Dashain+Program',
    date: '2081 Asoj 28',
    location: 'School Hall',
    description:
      'Students performed traditional Nepali dances, songs, and dramas celebrating Dashain. The program highlighted our rich cultural heritage and brought the school community together in festive spirit.',
  },
  {
    id: 'annual-day-2081',
    categoryId: 'cultural',
    title: 'Annual Day Celebration 2081',
    image: 'https://placehold.co/800x500/d97706/ffffff?text=Annual+Day',
    date: '2081 Magh 5',
    location: 'School Hall',
    description:
      'A grand evening of performances including classical and modern dance, choir, and drama. Awards were presented to outstanding students in academics, sports, and co-curricular activities.',
  },
  {
    id: 'teej-program',
    categoryId: 'cultural',
    title: 'Teej Festival Program',
    image: 'https://placehold.co/800x500/16a34a/ffffff?text=Teej',
    date: '2081 Bhadra 30',
    location: 'School Courtyard',
    description:
      'Female students and staff celebrated Teej with traditional red attire, fasting rituals, and cultural performances. The event strengthened bonds within our school family.',
  },
  // Academic
  {
    id: 'science-exhibition',
    categoryId: 'academic',
    title: 'Science & Engineering Exhibition',
    image: '../images/prospectus/image26.jpeg',
    date: '2081 Mangsir 10',
    location: 'Science Lab & Ground Floor',
    description:
      'Civil Engineering students showcased models, AutoCAD drawings, and practical projects. Visitors from local colleges and parents toured exhibits demonstrating applied science and technical skills.',
  },
  {
    id: 'quiz-competition',
    categoryId: 'academic',
    title: 'Inter-Class Quiz Competition',
    image: '../images/prospectus/image25.jpeg',
    date: '2081 Shrawan 25',
    location: 'School Hall',
    description:
      'Teams from Grades 8–12 competed in general knowledge and subject-specific rounds. The event promoted healthy academic rivalry and quick thinking under pressure.',
  },
  {
    id: 'career-seminar',
    categoryId: 'academic',
    title: 'Engineering Career Seminar',
    image: '../images/prospectus/image33.jpeg',
    date: '2081 Falgun 3',
    location: 'Conference Room',
    description:
      'Alumni and guest engineers spoke about pathways to IOE, PU, and international universities. Students learned about scholarships, entrance exams, and career opportunities in civil engineering.',
  },
  // Community
  {
    id: 'tree-plantation',
    categoryId: 'community',
    title: 'Tree Plantation Drive',
    image: '../images/prospectus/image10.jpeg',
    date: '2081 Ashadh 12',
    location: 'School Campus & Surroundings',
    description:
      'Students and teachers planted over 200 saplings around the campus and Pharping area as part of our environmental responsibility initiative. Each class adopted trees to nurture throughout the year.',
  },
  {
    id: 'health-camp',
    categoryId: 'community',
    title: 'Community Health Camp',
    image: '../images/prospectus/image23.jpeg',
    date: '2081 Kartik 1',
    location: 'School Ground',
    description:
      'Free health check-ups and awareness sessions were offered to local residents in partnership with a local clinic. Students volunteered to assist and learn about community health service.',
  },
  {
    id: 'literacy-awareness',
    categoryId: 'community',
    title: 'Literacy Awareness Campaign',
    image: 'https://placehold.co/800x500/f59e0b/ffffff?text=Literacy',
    date: '2081 Baishakh 8',
    location: 'Pharping Bazaar',
    description:
      'Student volunteers organized a street awareness program promoting education and school enrollment. Pamphlets and presentations reached parents and community members in the bazaar area.',
  },
  // Graduation
  {
    id: 'see-farewell-2080',
    categoryId: 'graduation',
    title: 'SEE Batch Farewell 2080',
    image: '../images/prospectus/image24.jpeg',
    date: '2080 Chaitra 28',
    location: 'School Hall',
    description:
      'Grade 10 students were honoured at a heartfelt farewell ceremony. Teachers shared memories and best wishes as graduates prepared for their Secondary Education Examination.',
  },
  {
    id: 'plus-two-graduation',
    categoryId: 'graduation',
    title: 'Plus Two Graduation Ceremony',
    image: 'https://placehold.co/800x500/2563eb/ffffff?text=Graduation',
    date: '2081 Ashwin 15',
    location: 'School Hall',
    description:
      'Civil Engineering stream graduates received certificates and awards. Principal and coordinators congratulated students on 100% board pass results and future engineering careers.',
  },
  {
    id: 'scholarship-awards',
    categoryId: 'graduation',
    title: 'Merit Scholarship Awards Night',
    image: 'https://placehold.co/800x500/f59e0b/ffffff?text=Scholarships',
    date: '2081 Poush 1',
    location: 'School Hall',
    description:
      'Top-performing students received merit scholarships and recognition for excellence. Alumni shared inspiring stories of success at IOE Pulchowk, PU Khowpa, and international universities.',
  },
];
