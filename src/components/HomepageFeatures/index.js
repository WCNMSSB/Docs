import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单易学',
    description: (
      <>
       使用简单易懂的方式 !!!
      </>
    ),
  },
  {
    title: '人肉编写QWQ',
    description: (
      <>
        纯人类编写 !!!
      </>
    ),
  },
  {
    title: '我是啥子',
    description: (
      <>
        ？
      </>
    ),
  },
];             

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
