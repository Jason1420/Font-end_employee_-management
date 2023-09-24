import React from 'react'
import './Pagination.scss'
const Pagination = () => {
    return (
        <div className='pagination--container'>
            <div className="pagination--bar">{/**/}
                <div className="page__item disabled">
                    <a className="page--link">&lt;
                    </a></div>
                <div className="page__item active">
                    <a className="page--link">1
                    </a>
                </div>
                <div className="page__item">
                    <a className="page--link">2
                    </a>
                </div>
                <div className="page__item">
                    <a className="page--link">3
                    </a>
                </div>
                <div className="page__item disabled">
                    <a className="page--link">…
                    </a>
                </div>
                <div className="page__item">
                    <a className="page--link">412
                    </a>
                </div>
                <div className="page__item">
                    <a className="page--link">413
                    </a>
                </div>
                <div className='page__item'>
                    <a className="page--link">&gt;
                    </a>
                </div>
            </div>
            <div className="input-jump-to">
                <input type="text" placeholder="Page" aria-label="Page" className="page-to-jump" />
                <button type="button" id="jump-to-page" className="page-button">Go
                </button>
            </div>
            {/* </nav> */}
        </div>
    )
}

export default Pagination