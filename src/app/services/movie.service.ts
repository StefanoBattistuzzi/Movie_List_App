import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {delay, Observable} from "rxjs";
import {ApiResult, MovieResult} from "./Interfaces";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() {}

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http
      .get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`)
  //.pipe(delay(5000));
  }

  getMovieDetails(id: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  }
}


