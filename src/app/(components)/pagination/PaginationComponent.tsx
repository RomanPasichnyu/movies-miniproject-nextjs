'use client';
import React, {FC} from 'react';
import css from '../movies/Movies.module.css'

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: FC<PaginationProps> = ({currentPage, onPageChange,}) => {
    return (
        <div className={css.pagination}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nO3YrUpEQRiA4UcMFi1iEI2CmxaEDRabXoA2gyaL7A1YN2l3b0CwCtptRsGqUbAIFqNYPLJwgsHdFX/wzMf3wPR5h/MzM6SUUkoppSabxZzCLeEOKwq2hidUJYfs4bWOKDJkAr0PAUWGTOPik4iiQhZxMySimJBVPI6IKCJkGy9jIgbjHMc4xAH2sYNNrKODZSxg5j9e6rcvRHx3POMBt7jGJc5wgj6O6kXpYhdb2KgXpYXJcRFTOP3DgN8a86MiBluNqwZMsvpJSBv3DZhglSHRHq1QL3uoz2+oH2K4LUqoTWOobXyog1Woo264y4dQ10GhLuhSSimllJKh3gFrPpgIjbtpngAAAABJRU5ErkJggg==" alt="left"/>
            </button>
            <div className={css.pagination}>{currentPage}</div>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === 500}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBklEQVR4nO3YoUoEURQG4E9sggiyQUyb1CiaLeoDuM2gXfQBrKY1r76AeRGMG3wBMRpMpmWboNGw4JWF6c6KMu7hfHDyPT8zd+bcS0oppZRSiqyFZQFs4gUbAgQpeMOuAEEmNcaZAEFKVT3MCxCkYIAlAYIUPKEtQJCCV+w01dwiVrGGbezhAEc4wTm6uMLdN0EKPnA4TQOTDbZeLb6PDo5xWi1+iWvc4Bb3eMQzhniv0dRP6xMXmKsTZOUPG/mt6mMhQpCCh6rXmQ9SMMJWBtH8kyhRXq1+nc0e5vMb5ofYhH89okwj/NA4iDDG92b9YDWOcNQNcfkQ4jqoFeWCLqWUUkopqi8/1pjigsdLawAAAABJRU5ErkJggg==" alt="right"/>
            </button>
        </div>
    );
};

export default PaginationComponent;
