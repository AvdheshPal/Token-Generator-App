import React, { useState } from 'react'
import * as Scroll from 'react-scroll';
import './Home.css';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export const Home = () => {
  const [inp,setInp] = useState({});
  const [gen,setGen] = useState(false)
  let startBlue = 1;
  let startRed = 1;

  let scroll    = Scroll.animateScroll;

  const handleInput = (e) => {
    const {name,value} = e.target;

    setInp({
      ...inp,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
    setGen(true)
    scroll.scrollToBottom()
  }
  
  const clearFn = () => {
    setGen(false)
    setInp({})
  }
  

  return (<>

  <h1>Token Generator App</h1>
   
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      <form onSubmit={handleSubmit}>
        <div style={{'width':'25%','margin':'auto'}}>
        <FormControl fullWidth >
        <FormHelperText sx={{m:1,color:'black'}}>No of blue token</FormHelperText>
        <TextField name='No_of_blue_token' type='number' inputProps={{ min: 1 }} id="outlined-basic" size="small" color="primary" focused label="token" variant="outlined" onChange={handleInput} required />
        </FormControl>
        <FormControl fullWidth >
        <FormHelperText sx={{m:1,color:'black'}}>Blue token prefix</FormHelperText>
        <TextField name='Blue_token_prefix' type='text' id="outlined-basic" size="small" color="primary" focused label="prefix" variant="outlined" onChange={handleInput} required/>
        </FormControl>
        <FormControl fullWidth >
        <FormHelperText sx={{m:1,color:'black'}}>Blue token per row</FormHelperText>
        <TextField name='Blue_token_per_row' type='number' inputProps={{ min: 1 }} id="outlined-basic" size="small" color="primary" focused label="per row" variant="outlined" onChange={handleInput} required/>
        </FormControl>
        <FormControl fullWidth >
        <FormHelperText sx={{m:1,color:'black'}}>No of red token</FormHelperText>
        <TextField name='No_of_red_token'  type='number' inputProps={{ min: 1 }} id="outlined-basic" size="small" color="error" focused label="token" variant="outlined" onChange={handleInput} required/>
        </FormControl>
        <FormControl fullWidth >
        <FormHelperText sx={{m:1,color:'black'}}>Red token prefix</FormHelperText>
        <TextField name='Red_token_prefix' id="outlined-basic" size="small" color="error" focused label="prefix" variant="outlined" onChange={handleInput} required/>
        </FormControl>
        <FormControl fullWidth >
        <FormHelperText sx={{m:1,color:'black'}}>Red token per row</FormHelperText>
        <TextField name='Red_token_per_row' type='number' inputProps={{ min: 1 }} id="outlined-basic" size="small" color="error" focused label="per row" variant="outlined" onChange={handleInput} required/>
        </FormControl>
        </div>

        <Stack sx={{ m: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', columnGap: '5%' }}>
          <Button type='submit' variant="contained" color="success" startIcon={<AddIcon />}>
            Generate
          </Button>
          <Button variant="contained" onClick={clearFn} color="error"  startIcon={<DeleteIcon />}>
            Clear
          </Button>
        </Stack>
      </form>
      
    </Box>
    <br/>
    <div>
      { (gen) ? <div className='boxContainer' style={{'width':`calc(110px *${inp.Blue_token_per_row})`}} >
        {
        Array(Number(inp.No_of_blue_token) || null).
        fill(inp.Blue_token_prefix).
        map((e,i)=>{
          return <div key={i} className="box" style={{'backgroundColor':'#0080ff'}} >{e}{startBlue++}</div>
        })
        }</div> : null}
      
    </div>
    <br/>
    <div>
      { (gen) ? <div className='boxContainer' style={{'width':`calc(110px *${inp.Red_token_per_row})`}} >
        {Array(Number(inp.No_of_red_token) || null).
        fill(inp.Red_token_prefix).
        map((e,i)=>{
    <span style={{'border':'1px solid',}} >this</span>
          return <div key={i} className="box" style={{'backgroundColor':'#ff0040'}}>{e}{startRed++}</div>
        })
        }</div> : null}
    </div>
    <br />           
    <br />           
  </>)
}
