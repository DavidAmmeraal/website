import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SectionScroller from '../components/SectionScroller';
import Section from '../components/Section';
import SectionSeperator from '../components/SectionSeperator';
import { getSectionElement } from 'sections';
import {getAllSectionsSelector, getFocusSectionSizeEntitySelector} from '../selectors';
import * as actions from '../actions';

class SectionsContainer extends React.Component {

  render () {

    const children = this.props.sections.map((section, index) => {

      const SectionContent = getSectionElement(section);

      return (
        <div key={index}>
          <Section
            id={section}
            onEnter={() => {
              this.props.encounterSection(section);
            }}
            onLeave={() => {
              this.props.passSection(section)
            }}
          >
            <SectionContent />
          </Section>
          <SectionSeperator />
        </div>
      );
    });

    const scrollTop = this.props.focusPosition ? this.props.focusPosition.top : null;
    return (
      <SectionScroller
        sticky={this.props.sticky}
        scrollTop={scrollTop}
      >
        {children}
      </SectionScroller>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    sections: getAllSectionsSelector(state),
    focusPosition: getFocusSectionSizeEntitySelector(state)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  encounterSection: (section) => {
    dispatch(actions.encounterSection(section))
  },
  passSection: (section) => {
    dispatch(actions.passSection(section));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionsContainer);
