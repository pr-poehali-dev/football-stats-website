export interface Team {
  id: number;
  name: string;
  logo: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[];
}

export interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  goals: number;
  assists: number;
  rating: number;
  photo: string;
  appearances: number;
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Манчестер Сити",
    logo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=50&h=50&fit=crop&crop=center",
    position: 1,
    played: 28,
    won: 22,
    drawn: 4,
    lost: 2,
    goalsFor: 68,
    goalsAgainst: 24,
    goalDifference: 44,
    points: 70,
    form: ["W", "W", "D", "W", "W"],
  },
  {
    id: 2,
    name: "Арсенал",
    logo: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=50&h=50&fit=crop&crop=center",
    position: 2,
    played: 28,
    won: 20,
    drawn: 5,
    lost: 3,
    goalsFor: 62,
    goalsAgainst: 26,
    goalDifference: 36,
    points: 65,
    form: ["W", "L", "W", "W", "D"],
  },
  {
    id: 3,
    name: "Ливерпуль",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=50&h=50&fit=crop&crop=center",
    position: 3,
    played: 28,
    won: 19,
    drawn: 6,
    lost: 3,
    goalsFor: 58,
    goalsAgainst: 28,
    goalDifference: 30,
    points: 63,
    form: ["D", "W", "W", "L", "W"],
  },
  {
    id: 4,
    name: "Челси",
    logo: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=50&h=50&fit=crop&crop=center",
    position: 4,
    played: 28,
    won: 17,
    drawn: 7,
    lost: 4,
    goalsFor: 52,
    goalsAgainst: 32,
    goalDifference: 20,
    points: 58,
    form: ["W", "D", "W", "W", "L"],
  },
  {
    id: 5,
    name: "Тоттенхэм",
    logo: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=50&h=50&fit=crop&crop=center",
    position: 5,
    played: 28,
    won: 16,
    drawn: 6,
    lost: 6,
    goalsFor: 48,
    goalsAgainst: 38,
    goalDifference: 10,
    points: 54,
    form: ["L", "W", "D", "W", "W"],
  },
];

export const players: Player[] = [
  {
    id: 1,
    name: "Эрлинг Холанд",
    team: "Манчестер Сити",
    position: "Нападающий",
    goals: 24,
    assists: 5,
    rating: 9.2,
    photo:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center",
    appearances: 26,
  },
  {
    id: 2,
    name: "Букайо Сака",
    team: "Арсенал",
    position: "Полузащитник",
    goals: 18,
    assists: 12,
    rating: 8.8,
    photo:
      "https://images.unsplash.com/photo-1594736797933-d0701ba8c6b4?w=100&h=100&fit=crop&crop=center",
    appearances: 28,
  },
  {
    id: 3,
    name: "Мохамед Салах",
    team: "Ливерпуль",
    position: "Нападающий",
    goals: 20,
    assists: 8,
    rating: 8.5,
    photo:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&crop=center",
    appearances: 27,
  },
  {
    id: 4,
    name: "Коул Палмер",
    team: "Челси",
    position: "Полузащитник",
    goals: 15,
    assists: 9,
    rating: 8.3,
    photo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop&crop=center",
    appearances: 25,
  },
  {
    id: 5,
    name: "Сон Хын Мин",
    team: "Тоттенхэм",
    position: "Нападающий",
    goals: 16,
    assists: 7,
    rating: 8.1,
    photo:
      "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=100&h=100&fit=crop&crop=center",
    appearances: 24,
  },
];
