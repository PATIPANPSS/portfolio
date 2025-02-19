/*

<ContentContainer 
  title=""
  data={[]}
/>

*/

import React, { useEffect, useState } from 'react'
import FormatchDate from './FormatchDate';
import Picture from './Picture';
import TitleLink from './TitleLink';
import Material from './Material';
import Descrption from './Descrption';
import Tech from './Tech';

const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(() => {
      onInitial(SECTION_ID);
    },[])

  return (
    <div id={SECTION_ID} className='scroll-m-14'>
      <div className="text-[#367579] font-medium px-2">{sectionTitle}</div>

      {data.map(
        (
          {
            date = "",
            title = "",
            link = "",
            materials = [],
            descrption = [],
            skills = [],
            picture = "",
          },
          index
        ) => (
          <div
            key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
            className={`grid grid-cols-[25%_70%] rounded-md px-2 py-6 transition-all ${
              isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-gray-700" : ""
            }`}
            onMouseEnter={() =>
              setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })
            }
            onMouseLeave={() =>
              setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })
            }
          >
            <div>
              <FormatchDate
                isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
              />
              {date}
              <Picture picture={picture} title={title} />
            </div>

            <div className="grid gap-y-4">
              <TitleLink
                isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                title={title}
                link={link}
              />

              {materials.length > 0 ? (
                <div className="flex gap-4 text-xl items-center">
                  {materials.map((event, index) => (
                    <Material
                      key={`${event}-material-${index}`}
                      isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                      icon={event.type}
                      link={event.link}
                    />
                  ))}
                </div>
              ) : null}

              {descrption.map((event, index) => (
                <Descrption
                  key={`${event}-descrption-${index}`}
                  descrption={event}
                />
              ))}

              {skills.map((event, index) => (
                <Tech
                  key={`${event}-skill-${index}`}
                  isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                  data={event}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ContentContainer

