
import Navbar from '@/components/common/navbar/navbar';
import HomePage from '@/app/Home//page'
import Footer from '@/components/common/footer/footer';
import { Unbounded ,Gilroy} from 'next/font/google'

const unbounded = Unbounded({
  weight: ['400', '700'], 
  subsets: ['latin'], 
})
export default function Home() {

  return (
   
     <HomePage/>

  );
}
