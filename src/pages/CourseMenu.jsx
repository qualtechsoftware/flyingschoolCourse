import * as ch1 from '../chapters/ch1'
import * as ch2 from '../chapters/ch2'
import * as ch3 from '../chapters/ch3'
import ChapterAccordion from '../components/ChapterAccordion'

const chapters = [ch1, ch2, ch3]

export default function CourseMenu() {
  return (
    <div className="course-menu">
      <section className="course-hero">
        <p className="eyebrow">✈ Flying School — Ground Training</p>
        <h2 className="course-title">The Atmosphere: Pilot Essentials</h2>
      </section>

      {chapters.map((ch) => (
        <ChapterAccordion key={ch.chapterMeta.number} chapter={ch} />
      ))}
    </div>
  )
}
