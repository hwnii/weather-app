import LocationItem from '@/components/LocationItem';
import RevalidateButton from '@/components/RevalidateButton';
import { getTime } from '@/utils/getTime';
import style from './style.module.css';

export default async function Home() {
  const time = await getTime('Asia/Seoul');

  return (
    <>
      <h1>날씨 앱</h1>

      <h3>{time.dateTime}</h3>

      <ul className={style.list}>
        <LocationItem location='seoul' city='서울' />
        <LocationItem location='NYC' city='뉴욕' />
        <LocationItem location='london' city='런던' />
      </ul>

      <RevalidateButton tag='time' />
    </>
  );
}
