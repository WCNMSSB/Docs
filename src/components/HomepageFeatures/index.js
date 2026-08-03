import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Do for love',
    description: (
      <>
        Do you love me !!!
      </>
    ),
  },
  {
    title: 'Do for love',
    description: (
      <>
        Do you love me !!!
      </>
    ),
  },
  {
    title: 'Easy to learn',
    description: (
      <>
        sure!
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
