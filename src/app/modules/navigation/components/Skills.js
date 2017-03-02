import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Skills.css';

class Skills extends React.Component {
  render () {

    return (
      <div styleName='Skills'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus blandit viverra. Ut ut turpis scelerisque, convallis dolor nec, mollis justo. Cras vel auctor sapien. In ut tellus ex. Maecenas venenatis nunc eget molestie dignissim. Sed accumsan quam ut sapien bibendum tempor. Nullam blandit efficitur lorem quis pellentesque. Mauris augue leo, tincidunt non dui vitae, dignissim aliquam ligula. Nullam tristique eleifend erat nec viverra. Donec hendrerit quis dui sit amet eleifend. Morbi vitae accumsan eros. Integer viverra dolor at nisi hendrerit, ut sodales est luctus. Nulla finibus consequat est placerat ultricies.

Sed ornare est at finibus posuere. Praesent tempus malesuada eros, id faucibus leo tincidunt vitae. Aliquam sit amet tellus nec lorem porttitor rutrum nec id mi. Integer at varius lacus, eget tempor risus. Etiam non arcu ex. Nulla id suscipit massa, efficitur eleifend sapien. Aenean interdum erat tempus urna finibus varius. Proin semper nisl ut risus tincidunt rhoncus. Sed ultricies arcu ultrices vulputate bibendum. Maecenas elementum ipsum at elementum sollicitudin.

Integer convallis, nisl fermentum suscipit finibus, nulla erat sagittis nulla, porta hendrerit lacus est in mi. Morbi aliquam lobortis erat et sodales. Etiam scelerisque, nulla quis porttitor blandit, metus ex blandit nunc, id commodo magna nunc a justo. Quisque a accumsan nibh. Sed tellus quam, scelerisque et nibh in, vulputate tempus nulla. In aliquet fringilla sollicitudin. Sed facilisis eu arcu et sagittis. Phasellus quis imperdiet nulla.
        </p>
      </div>
    )
  }
}

export default CSSModules(Skills, styles);
