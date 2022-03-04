package com.example.waterWarden.model;

public class tox {

	double ph;
	double tds;
	double temp;
	
	
	public tox (double temp, double tds, double ph) {
		this.tds=tds;
		this.temp = temp;
		this.ph = ph;
	}
	
	public double getPH(){
		return this.ph;
	}
	
	public void setPH(double ph) {
		this.ph = ph;
	}
	
	public double getTDS(){
		return this.tds;
	}
	
	public void setTDS(double tds) {
		this.tds = tds;
	}
	
	public double getTemp(){
		return this.temp;
	}
	
	public void setTemp(double temp) {
		this.temp = temp;
	}
}
