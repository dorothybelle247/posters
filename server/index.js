import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(boddyParser.json({limit: "30mb", extended: true}));
app.use(boddyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

