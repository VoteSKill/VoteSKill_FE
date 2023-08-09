import { atom, selector } from 'recoil';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import gameAPI from 'apis/gameAPI';

// 체크용
export const responseData = atom({
  key: 'responseData',
  default: [],
});
