


export default function SeeMoreParagraph({ text, showFullText, onToggleShowText }) {
    return (
        <div>
          {showFullText ? (
            <p>{text?}</p>
          ) : (
            <p>{text?.slice(0, 70)}...</p>
          )}
          <a  className='text-info text-decoration-none ' style={{cursor:"pointer"}} onClick={onToggleShowText}>
            {showFullText ? 'See Less' : 'See More'}
          </a>
        </div>
      );
    }
