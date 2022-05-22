import topico from '../../assets/images/topico.jpg';
import aromatico from '../../assets/images/aromatico.jpg';
import interno from '../../assets/images/interno.jpg';

import { Aromatico, Topico, Interno } from '../common/svgs';

const content = [
   {
      id: 1,
      title: 'Aromático',
      desc: 'Respirarlo.',
      img: aromatico,
      svg: <Aromatico />,
   },
   {
      id: 2,
      title: 'Tópico',
      desc: 'Unas gotas en la piel.',
      img: topico,
      svg: <Topico />,
   },
   {
      id: 3,
      title: 'Interno',
      desc: 'Uno con tu cuerpo.',
      img: interno,
      svg: <Interno />,
   },
];

export default content;
