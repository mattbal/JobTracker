import prisma from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const jobs = await prisma.job.findMany();
    return Response.json(jobs);
  } catch (error) {
    return new Response(`Error ${error}`, {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const { jobPost, name, company, jobID, dateApplied, status } = await req.json();
    const result = await prisma.job.create({
      data: {
        jobPost: jobPost,
        name: name,
        company: company,
        jobID: jobID,
        status: status,
      },
    });
    return Response.json(result);
  } catch (error) {
    return new Response(`Error ${error}`, {
      status: 500,
    });
  }
}
