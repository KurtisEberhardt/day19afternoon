import express from "express";
import BaseController from "../utils/BaseController";
import { houseService } from "../services/HouseService";

export class HouseController extends BaseController{
    constructor() {
        super("api/cars");
        this.router
          .get("", this.getAll)
          .get('/:id', this.getOne)
          .post("", this.create)
          .delete('/:id', this.delete)
          .put("/:id", this.edit)
      }
    async getAll(req, res, next) {
        try {
        return res.send(await houseService.find(req.query))
            
        } catch (error) {
         next(error)
    }
}
}