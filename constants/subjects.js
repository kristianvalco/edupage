const SubjectData = [
  {
    id: 1,
    name: 'Matematika',
    teacher: 'Mária Džambová',
    classroom: 'Učebňa VYT2',
    time: '7:50 - 8:35',
    break: 5,
    homework: [
      {
        id: 1,
        title: 'Matematika',
        description: 'Matematika',
        date: '12.12.2020',
        time: '12:00',
        status: 'done',
      },
    ],
    grades: {
      midterm: '2',
      final: '1',
    },
    attendance: {
      attended: '10',
      total: '20',
    },
    homework_status: 'not_done',
    grades_status: 'not_done',
  },
  {
    id: 2,
    name: 'Angličtina',
    teacher: 'Katarína Jakubová',
    classroom: 'Učebňa VYT2',
    time: '8:40 - 9:25',
    break: 5,
    homework: [
      {
        id: 1,
        title: 'Matematika',
        description: 'Matematika',
        date: '12.12.2020',
        time: '12:00',
        status: 'done',
      },
    ],
    grades: {
      midterm: '2',
      final: '1',
    },
    attendance: {
      attended: '10',
      total: '20',
    },
    grades_status: 'not_done',
  },
  {
    id: 3,
    name: 'Fyzika',
    teacher: 'Peter Svatuška',
    classroom: 'Učebňa VYT2',
    time: '9:30 - 10:15',
    break: 5,
    homework: [
      {
        id: 1,
        title: 'Matematika',
        description: 'Matematika',
        date: '12.12.2020',
        time: '12:00',
        status: 'done',
      },
    ],
    grades: {
      midterm: '2',
      final: '1',
    },
    attendance: {
      attended: '10',
      total: '20',
    },
    grades_status: 'not_done',
  },
  {
    id: 4,
    name: 'Grafický dizajn digitálnych médií',
    teacher: 'Mária Džambová',
    time: '10:20 - 11:05',
    break: 5,
    grades: {
      midterm: '2',
      final: '1',
    },
    attendance: {
      attended: '10',
      total: '20',
    },
    grades_status: 'not_done',
  },
];

export { SubjectData };