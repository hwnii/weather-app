import { getCurrentWeather } from '@/utils/getCurrentWeather';
import Link from 'next/link';

type Props = {
  location: string;
  city: string;
};

export default async function LocationItem({ location, city }: Props) {
  const res = await getCurrentWeather(location);

  return (
    <li>
      <Link href={`/${location}?name=${city}`}>{city}</Link>
      <span>{res.current.condition.text}</span>
    </li>
  );
}
