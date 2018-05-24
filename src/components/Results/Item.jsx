import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

class Item extends Component {
  constructor(props) {
    super(props);

    this.toggleDescription = this.toggleDescription.bind(this);
    // this.hide = this.hide.bind(this);
    // this.show = this.show.bind(this); 
    // this.getHeight = this.getHeight.bind(this); 
    this.collapseSection = this.collapseSection.bind(this); 
    this.expandSection = this.expandSection.bind(this); 
  }

  // getHeight(element) {
  //   element.style.display = 'block'; 
  //   let height = element.scrollHeight + 'px'

  //   element.style.display = ''; 
  //   return height; 
  // }

  // show(element){
  //   let height = this.getHeight(element); 
  //   element.classList.add('show'); 
  //   element.style.maxHeight = height; 

  //   window.setTimeout(() => {element.style.height = '';}, 350); 
  // }

  // hide(element) {
  //   // element.classList.add('animated', 'zoomOut');
  //   element.style.maxHeight = 0; 

  //   window.setTimeout(() => {
  //     element.classList.remove('show', 'animated', 'slideInUp', 'zoomOut');
  //   }, 350);

  //   window.setTimeout(() => {
  //     element.classList.add('hidden');
  //   }, 350);
  // }

  // toggleDescription(e) {
  //   const shownItem = document.getElementsByClassName('show');
  //   const itemText = document.getElementById(e.target.dataset.internalid);
  //   if (shownItem.length > 0 && shownItem[0].id === itemText.id) {
  //     // this.hide(shownItem[0]);
  //     shownItem[0].classList.add('hidden'); 
  //   } else {
  //     if (shownItem.length > 0) {
  //       this.hide(shownItem[0]);
  //     }
  //     itemText.classList.remove('hidden');
  //     // itemText.classList.add('show', 'animated', 'slideInUp');
  //     this.show(itemText); 
  //     const itemContainer = document.getElementById(`result-item-${e.target.dataset.internalid}`)
  //     let max = this.getHeight(itemContainer); 
  //     itemContainer.style.maxHeight = max; 
  //   }
  // }

  collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    let descriptionHeight = element.scrollHeight;
    
    // temporarily disable all css transitions
    let elementTransition = element.style.transition;
    element.style.transition = '';
    
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = descriptionHeight + 'px';
      element.style.transition = elementTransition;
      
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 0 + 'px';
      });
    });
    
    // mark the section as "currently collapsed"
    // element.setAttribute('data-collapsed', 'true');
      element.classList.add('hidden'); 
      element.classList.remove('show'); 
      // window.setTimeout(() => {element.classList.remove('show')}, 300);
      // window.setTimeout(() => {element.classList.add('hidden')}, 350);

  }
  
  expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var descriptionHeight = element.scrollHeight;
    
    // have the element transition to the height of its inner content
    element.style.height = descriptionHeight + 'px';
    
    window.setTimeout(() => element.style.height = null, 400);


    // when the next css transition finishes (which should be the one we just triggered)
    // element.addEventListener('transitionend', function(e) {
      // remove this event listener so it only gets triggered once
      // element.removeEventListener('transitionend', arguments.callee);
      
      // remove "height" from the element's inline styles, so it can return to its initial value
    //   element.style.height = null;
    // });
    
    // mark the section as "currently not collapsed"
    // element.setAttribute('data-collapsed', 'false');
    element.classList.remove('hidden');
    element.classList.add('show'); 
  }
  

  // document.querySelector('#toggle-button').addEventListener('click', function(e) {
  //   var section = document.querySelector('.section.collapsible');
  //   var isCollapsed = section.getAttribute('data-collapsed') === 'true';
      
  //   if(isCollapsed) {
  //     expandSection(section)
  //     section.setAttribute('data-collapsed', 'false')
  //   } else {
  //     collapseSection(section)
  //   }
  // });

  toggleDescription(e) {
    const shownItem = document.getElementsByClassName('show');
    const itemText = document.getElementById(e.target.dataset.internalid);
    if (shownItem.length > 0 && shownItem[0].id === itemText.id) {
      // this.hide(shownItem[0]);
      this.collapseSection(shownItem[0]); 
      // shownItem[0].classList.add('hidden'); 
    } else {
      if (shownItem.length > 0) {
        // this.hide(shownItem[0]);
        this.collapseSection(shownItem[0]); 
        
      }
      this.expandSection(itemText);       
      // itemText.classList.remove('hidden');
      // itemText.classList.add('show', 'animated', 'slideInUp');
      // this.show(itemText); 
      // const itemContainer = document.getElementById(`result-item-${e.target.dataset.internalid}`)
      // let max = this.getHeight(itemContainer); 
      // itemContainer.style.maxHeight = max; 
    }
  }



  render() {
    const { breach } = this.props;
    return (
      <div
        className="result-item animated fadeInDown"
        id={`result-item-${breach.Title}`}
        data-internalid={`${breach.Title}`}
        onClick={this.toggleDescription}
      >
        <div className="logo-container" data-internalid={`${breach.Title}`}>
          <img
            src={`//logo.clearbit.com/${breach.Domain}`}
            className="logo"
            alt="logo"
            data-internalid={`${breach.Title}`}
          />
        </div>
        <div
          className={`result-text ${breach.Title}`} 
          data-internalid={`${breach.Title}`}
        >
          <p className="Title" data-internalid={`${breach.Title}`}>
            {breach.Title}
          </p>
          <p className="breach-date" data-internalid={`${breach.Title}`}>
            Breach Date: {breach.BreachDate}
          </p>
          <div
            className="description hidden"
            data-internalid={`${breach.Title}`}
            id={`${breach.Title}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(breach.Description)
            }}
          />
          <div className="data-classes" data-internalid={`${breach.Title}`}>
            <div
              className="data-classes-text"
              data-internalid={`${breach.Title}`}
            >
              Compromised Data:{' '}
            </div>
            <div
              className="data-classes-info"
              data-internalid={`${breach.Title}`}
            >
              {breach.DataClasses.join(', ')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  breach: PropTypes.object
};

export default Item;
